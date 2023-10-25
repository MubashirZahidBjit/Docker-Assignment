import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { decodeToken } from "react-jwt";

const Authenticate = () => {
  const token = localStorage.getItem("token");
  const check = decodeToken(token);
  console.log("Authenticating", check);

  return check.role == 1 ? (
    <div>
      {/* <Navigate to="/admin" /> */}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Authenticate;
