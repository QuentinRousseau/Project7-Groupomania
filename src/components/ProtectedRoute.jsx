import { Navigate, Outlet } from "react-router";

export function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/landing" replace />;
  }

  return children ? children : <Outlet />;
}
