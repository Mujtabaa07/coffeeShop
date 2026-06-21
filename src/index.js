import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Apply saved theme (light/dark) from localStorage before React mounts.
// Requirement: default theme remains unchanged unless user toggles.
try {
  const saved = localStorage.getItem('themeMode');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  }
} catch (e) {
  // ignore (e.g. SSR or restricted env)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
