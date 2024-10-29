import React from "react";
import "../index.css";

import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate(); // Corrected

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops! Page not found</h1>
      <p>
        <em>{error?.statusText || error?.message}</em>
      </p>
      <button type="button" onClick={handleGoToHomePage}>
        Go to Home Page
      </button>
    </div>
  );
}
