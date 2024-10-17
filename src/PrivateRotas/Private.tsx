import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const tokenArmazenado = localStorage.getItem("token");

  if (tokenArmazenado === "Autorizado" && tokenArmazenado != undefined) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
