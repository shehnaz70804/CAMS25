import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ Component, role }) => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default ProtectedRoute;
