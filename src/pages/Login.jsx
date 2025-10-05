import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Animation from "../components/Animation/Animation";
import "./Login.css";

const Login = ({ registeredUser, setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (
      registeredUser &&
      formData.email === registeredUser.email &&
      formData.password === registeredUser.password
    ) {
      console.log("✅ Login Successful:", formData);
      setUser(registeredUser);

      setShowAnimation(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("Invalid email or password!");
    }
  };

  if (showAnimation) {
    return <Animation />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Email" name="email" onChange={handleChange} />
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
