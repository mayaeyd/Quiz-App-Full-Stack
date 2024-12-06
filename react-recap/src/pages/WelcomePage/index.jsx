import React from "react";
import OnBoarding from "../../assets/onBoarding";
import "./style.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <OnBoarding />
      <Button
        variant="contained"
        onClick={() => navigate("/filter")}
        size="large"
        color="secondary"
      >
        Get Started
      </Button>
    </div>
  );
};

export default WelcomePage;
