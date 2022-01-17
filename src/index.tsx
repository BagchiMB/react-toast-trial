import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";

// Components
import App from "./main";
import ToastContainer from "./components/toast/toast-container/ToastContainer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer position="bottom-right" delayInMs={5000} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
