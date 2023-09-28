import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../modules/home/pages/HomePage";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
  ]);