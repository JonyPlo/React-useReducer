import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const { error, statusText } = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || error.message}</i>
      </p>
    </div>
  );
};
