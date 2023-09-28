import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../modules/auth/pages/LoginPage";
import { HomePage } from "../../modules/home/pages/HomePage";
import { PrivateRouter, PublicRouter } from "./secure_router";

export const AppRoutes =()=>{
  return(
    <Routes >
      <Route path="/" element={
      <PublicRouter>
        <LoginPage/>
      </PublicRouter>
    
    }/>
      <Route path="/home" element={<PrivateRouter>
        <HomePage/>
      </PrivateRouter>}/>
    </Routes>
  )
}
  