import { FC } from 'react';

export const Footer: FC<{ title: string }> = ({ title = '' }) => {
  return (
    <footer className="border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
      <div className="container mx-auto px-8 py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} ⚛️ <strong>{title}</strong>
        </p>
      </div>
    </footer>
  );
};
