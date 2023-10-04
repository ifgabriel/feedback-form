import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="flex min-h-screen w-screen items-center justify-center bg-slate-200 py-12">
      <App />
    </main>
  </React.StrictMode>
);
