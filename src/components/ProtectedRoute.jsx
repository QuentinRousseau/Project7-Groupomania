import { Navigate, Outlet } from "react-router";

export function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="*" replace />;
  }

  return children ? children : <Outlet />;
}
