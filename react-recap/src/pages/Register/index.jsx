import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { registerUser } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const { user, token, isLoggedIn, loading, error } = useSelector(
    (state) => state.auth
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    dispatch(registerUser({ username, email, password }));
  };

  return (
    <div>
      <Input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default Register;
