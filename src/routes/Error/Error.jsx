import { useRouteError } from "react-router-dom";
import { VscError } from "react-icons/vsc";

import "./Error.css";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="error-container">
      <div className="error-box">
        <div className="error-message">
          <h1>
            Oops <VscError />
          </h1>
          <p>An error has occurred:</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <img src="/assets/error-image.jpg" alt="error" />
      </div>
    </div>
  );
}
