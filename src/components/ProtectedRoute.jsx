import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, requiredRole }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
