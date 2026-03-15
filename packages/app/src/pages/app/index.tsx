'use client';

import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { NextPage } from 'next';
import { useEffect, useRef } from 'react';

/* ---------------- CONFIG ---------------- */

const LAMBDA = 0.1;
const SAMPLES_PER_POINT = 20;
const FEATURE_SCALE = 10; // amplify feature variation

/* ---------------- TYPES ---------------- */

type Sample = {
  features: number[];
  target: number[];
};

/* ---------------- PAGE ---------------- */

const AppPage: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const samplesRef = useRef<Sample[]>([]);
  const modelRef = useRef<{ x: number[]; y: number[] } | null>(null);

  const smoothingRef = useRef({ x: 0, y: 0 });

  const calibrationIndexRef = useRef(0);
  const calibrationPointsRef = useRef<[number, number][]>([]);
  const dwellStartRef = useRef<number | null>(null);
  const sampleBucketRef = useRef<number[][]>([]);
  const isCalibratingRef = useRef(true);

  const lastGazeRef = useRef<{ x: number; y: number } | null>(null);
  const lastTimeRef = useRef<number>(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    let faceLandmarker: FaceLandmarker;
    let animationId: number;

    /* ---------------- CALIBRATION GRID ---------------- */

    const initCalibrationPoints = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const grid = [0.05, 0.25, 0.5, 0.75, 0.95];

      calibrationPointsRef.current = [];
      grid.forEach((gx) =>
        grid.forEach((gy) =>
          calibrationPointsRef.current.push([gx * w, gy * h])
        )
      );
    };

    /* ---------------- INIT ---------------- */

    const init = async () => {
      const video = videoRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      initCalibrationPoints();

      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
      );

      faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task',
        },
        runningMode: 'VIDEO',
        numFaces: 1,
      });

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });

      video.srcObject = stream;
      await video.play();
      lastTimeRef.current = performance.now();

      detect();
    };

    /* ---------------- FEATURE ENGINEERING ---------------- */

    const estimateHeadPose = (landmarks: any[]) => {
      const nose = landmarks[1];
      const leftEar = landmarks[234];
      const rightEar = landmarks[454];
      const chin = landmarks[152];
      const forehead = landmarks[10];

      const yaw =
        (nose.x - (leftEar.x + rightEar.x) / 2) /
        Math.abs(rightEar.x - leftEar.x);

      const pitch =
        (nose.y - (forehead.y + chin.y) / 2) / Math.abs(chin.y - forehead.y);

      return { yaw, pitch };
    };

    const getCenter = (points: any[]) => ({
      x: points.reduce((s, p) => s + p.x, 0) / points.length,
      y: points.reduce((s, p) => s + p.y, 0) / points.length,
    });

    const computeFeatures = (landmarks: any[]) => {
      if (landmarks.length < 478) return null;

      const leftIris = landmarks.slice(468, 473);
      const rightIris = landmarks.slice(473, 478);

      const leftEyeCorners = [landmarks[33], landmarks[133]];
      const rightEyeCorners = [landmarks[362], landmarks[263]];

      const leftIrisCenter = getCenter(leftIris);
      const rightIrisCenter = getCenter(rightIris);

      const leftEyeCenter = getCenter(leftEyeCorners);
      const rightEyeCenter = getCenter(rightEyeCorners);

      const leftWidth = Math.abs(leftEyeCorners[0].x - leftEyeCorners[1].x);
      const rightWidth = Math.abs(rightEyeCorners[0].x - rightEyeCorners[1].x);

      const leftHeight = Math.abs(landmarks[159].y - landmarks[145].y);
      const rightHeight = Math.abs(landmarks[386].y - landmarks[374].y);

      let normX = -(
        ((leftIrisCenter.x - leftEyeCenter.x) / leftWidth +
          (rightIrisCenter.x - rightEyeCenter.x) / rightWidth) /
        2
      );

      let normY =
        ((leftIrisCenter.y - leftEyeCenter.y) / leftHeight +
          (rightIrisCenter.y - rightEyeCenter.y) / rightHeight) /
        2;

      const { yaw, pitch } = estimateHeadPose(landmarks);

      normX += yaw * 0.7;
      normY += pitch * 0.7;

      // Scale + polynomial features
      normX *= FEATURE_SCALE;
      normY *= FEATURE_SCALE;

      return [normX, normY, normX * normY, normX * normX, normY * normY];
    };

    /* ---------------- TRAINING ---------------- */

    const trainModel = () => {
      const samples = samplesRef.current;
      if (samples.length < calibrationPointsRef.current.length) return;

      const solve = (dim: 0 | 1) => {
        const X = samples.map((s) => [1, ...s.features]);
        const Y = samples.map((s) => s.target[dim]);

        const Xt = transpose(X);
        let XtX = multiply(Xt, X);

        XtX = XtX.map((row, i) =>
          row.map((val, j) => (i === j ? val + LAMBDA : val))
        );

        const XtXInv = inverse(XtX);
        const XtY = multiplyVec(Xt, Y);

        return multiplyVec(XtXInv, XtY);
      };

      modelRef.current = {
        x: solve(0),
        y: solve(1),
      };

      isCalibratingRef.current = false;
    };

    const predict = (features: number[]) => {
      if (!modelRef.current) return null;
      const input = [1, ...features];

      const dot = (w: number[]) =>
        w.reduce((sum, wi, i) => sum + wi * input[i], 0);

      return {
        x: dot(modelRef.current.x),
        y: dot(modelRef.current.y),
      };
    };

    /* ---------------- DETECTION LOOP ---------------- */

    const detect = () => {
      const video = videoRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      const results = faceLandmarker.detectForVideo(video, performance.now());

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.faceLandmarks.length > 0) {
        const features = computeFeatures(results.faceLandmarks[0]);
        if (!features) return;

        if (isCalibratingRef.current) {
          collectCalibration(features);
        } else {
          const predicted = predict(features);
          if (predicted) {
            let x = clamp(predicted.x, 0, canvas.width);
            let y = clamp(predicted.y, 0, canvas.height);

            const now = performance.now();
            const dt = (now - lastTimeRef.current) / 1000;
            lastTimeRef.current = now;

            if (lastGazeRef.current && dt > 0) {
              const dx = x - lastGazeRef.current.x;
              const dy = y - lastGazeRef.current.y;
              velocityRef.current = Math.sqrt(dx * dx + dy * dy) / dt;
            }

            lastGazeRef.current = { x, y };

            // Smooth
            smoothingRef.current.x += (x - smoothingRef.current.x) * 0.25;
            smoothingRef.current.y += (y - smoothingRef.current.y) * 0.25;

            drawGaze(ctx, smoothingRef.current.x, smoothingRef.current.y);
          }
        }
      }

      if (isCalibratingRef.current) drawCalibration(ctx);

      animationId = requestAnimationFrame(detect);
    };

    /* ---------------- CALIBRATION ---------------- */

    const collectCalibration = (features: number[]) => {
      const index = calibrationIndexRef.current;
      const point = calibrationPointsRef.current[index];
      if (!point) return;

      const now = Date.now();

      if (dwellStartRef.current === null) {
        dwellStartRef.current = now;
        return;
      }

      if (now - dwellStartRef.current > 800) {
        sampleBucketRef.current.push(features);

        if (sampleBucketRef.current.length >= SAMPLES_PER_POINT) {
          const avg = average(sampleBucketRef.current);

          samplesRef.current.push({
            features: avg,
            target: point,
          });

          sampleBucketRef.current = [];
          dwellStartRef.current = null;
          calibrationIndexRef.current++;

          if (
            calibrationIndexRef.current >= calibrationPointsRef.current.length
          ) {
            trainModel();
          }
        }
      }
    };

    const drawCalibration = (ctx: CanvasRenderingContext2D) => {
      const point = calibrationPointsRef.current[calibrationIndexRef.current];
      if (!point) return;

      ctx.beginPath();
      ctx.arc(point[0], point[1], 22, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    };

    const drawGaze = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    };

    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        className="absolute top-0 left-0 h-full w-full scale-x-[-1] object-cover"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full w-full scale-x-[-1]"
      />
    </div>
  );
};

export default AppPage;

/* ---------------- UTILITIES ---------------- */

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function average(arr: number[][]) {
  const sum = arr.reduce(
    (acc, f) => acc.map((v, i) => v + f[i]),
    new Array(arr[0].length).fill(0)
  );
  return sum.map((v) => v / arr.length);
}

/* -------- Matrix (generic NxN inverse via Gauss-Jordan) -------- */

function transpose(m: number[][]) {
  return m[0].map((_, i) => m.map((row) => row[i]));
}

function multiply(a: number[][], b: number[][]) {
  return a.map((row) =>
    b[0].map((_, i) => row.reduce((sum, val, j) => sum + val * b[j][i], 0))
  );
}

function multiplyVec(a: number[][], v: number[]) {
  return a.map((row) => row.reduce((sum, val, i) => sum + val * v[i], 0));
}

function inverse(matrix: number[][]) {
  const n = matrix.length;
  const I = identity(n);
  const M = matrix.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    let diag = M[i][i];
    if (Math.abs(diag) < 1e-10) {
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(M[j][i]) > 1e-10) {
          [M[i], M[j]] = [M[j], M[i]];
          [I[i], I[j]] = [I[j], I[i]];
          break;
        }
      }
      diag = M[i][i];
    }

    for (let j = 0; j < n; j++) {
      M[i][j] /= diag;
      I[i][j] /= diag;
    }

    for (let k = 0; k < n; k++) {
      if (k === i) continue;
      const factor = M[k][i];
      for (let j = 0; j < n; j++) {
        M[k][j] -= factor * M[i][j];
        I[k][j] -= factor * I[i][j];
      }
    }
  }

  return I;
}

function identity(n: number) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}
