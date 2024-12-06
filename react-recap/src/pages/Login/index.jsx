import { Button, Input } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div>
      <Input placeholder="username" />
      <Input placeholder="password" />
      <Button>Login</Button>
    </div>
  );
};

export default Login;
