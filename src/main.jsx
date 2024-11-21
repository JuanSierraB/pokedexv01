/*import { StrictMode } from "react";
/mport { createRoot } from "react-dom/client";*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
