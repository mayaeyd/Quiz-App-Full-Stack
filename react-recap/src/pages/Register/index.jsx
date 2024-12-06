import { Button, Input } from "@mui/material";
import React from "react";

const Register = () => {
  return <div>
    <Input placeholder="Username" color="secondary"/>
    <Input placeholder="Email" color="secondary"/>
    <Input placeholder="Password" color="secondary"/>
    <Button color="secondary" variant="contained">Register</Button>
  </div>;
};

export default Register;
