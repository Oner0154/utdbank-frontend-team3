import React from "react";
import { Navigate } from "react-router";
import { useStore } from "../store";
import { isEmployee, isManager } from "../utils/auth";

const PrivateRoute = ({ children, employee, manager }) => {
  const { userState } = useStore();
  const { isUserLogin, user } = userState;

  if (!isUserLogin) return <Navigate to="/authentication" />;

  if (employee && !isEmployee(user.roles))
    return <Navigate to="/pagenotfound" />;
  if (manager && !isManager(user.roles)) return <Navigate to="/pagenotfound" />;

  return children;
};

export default PrivateRoute;
