/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}
