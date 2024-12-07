import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/slices/authSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { user, token, isLoggedIn, loading, error } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(LoginUser({username, password}));
    navigate("/");
  };

  return (
    <div>
      <Input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
