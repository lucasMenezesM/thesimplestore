import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="error-container">
      <h1>Error</h1>
      <p>An error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
