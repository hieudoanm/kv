import { ErrorTemplate } from '@atomic/templates/ErrorTemplate';

const ForbiddenPage = () => {
  return (
    <ErrorTemplate
      code="403"
      title="Access Denied"
      message="You do not have permission to view this page."
      action="Go Home"
    />
  );
};

export default ForbiddenPage;
