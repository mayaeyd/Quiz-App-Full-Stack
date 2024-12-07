import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminsRoute = () => {
  const [check, setCheck] = useState(true);

  const getAuthUser = async () => {
    const { data } = await axios.get("", {
      headers: {
        Authorization: localStorage.token,
      },
    });

    const isAdmin = data.user.role === 'admin';

    setCheck(isAdmin);
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  useEffect(() => {
    console.log(check);
  }, [check]);

  return check ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AdminsRoute;