import { ErrorTemplate } from '@atomic/templates/ErrorTemplate';

const ErrorPage = () => {
  return (
    <ErrorTemplate
      code="500"
      title="Internal Server Error"
      message="Something went wrong on our end. Please try again later."
      action="Go Home"
    />
  );
};

export default ErrorPage;
