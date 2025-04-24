import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouterLayouts from "./routs/RouterLayouts";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services";
import ContactUS from "./pages/ContactUS";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/services", element: <Services /> },
      { path: "/contact-us", element: <ContactUS /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routs} />
  </StrictMode>
);
