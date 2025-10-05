import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = ({ setRegisteredUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    console.log("Signup Data:", formData);
    setRegisteredUser(formData);
    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Full Name" name="name" onChange={handleChange} />
        <TextField label="Email" name="email" onChange={handleChange} />
        <TextField label="Password" type="password" name="password" onChange={handleChange} />
        <Button variant="contained" onClick={handleSignup}>Signup</Button>
      </Box>
    </Container>
  );
};

export default Signup;
