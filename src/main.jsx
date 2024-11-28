import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import TimerDisplay from "./components/TimerDisplay.jsx";
import Counter from "./components/Counter.jsx";
import Weather from "./components/Weather.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TimerDisplay /> },
      { path: "/counter", element: <Counter /> },
      { path: "/weather", element: <Weather /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
