import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../../modules/auth/pages/LoginPage";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
  ]);