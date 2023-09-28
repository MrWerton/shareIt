import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../../modules/auth/pages/LoginPage";
import { HomePage } from "../../modules/home/pages/HomePage";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/home",
      element: <HomePage/>
    },
  ]);