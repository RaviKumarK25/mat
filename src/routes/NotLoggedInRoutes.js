import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login";

export default function NotLoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));

  return user ? <Login /> : <Outlet />;
}
