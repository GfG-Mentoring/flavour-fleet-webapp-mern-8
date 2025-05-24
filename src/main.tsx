import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import App from "./App.tsx";
import { Provider } from "./provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ToastContainer
          draggable
          pauseOnFocusLoss
          pauseOnHover
          autoClose={5000}
          closeOnClick={false}
          hideProgressBar={false}
          newestOnTop={false}
          position="top-right"
          rtl={false}
          theme="dark"
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
