import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (!token) return null;

  return <div>{children}</div>;
};

export default UserProtectedWrapper;
