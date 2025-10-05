import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar className="navbar">
        <Typography variant="h6" className="logo">
          FoodFinder
        </Typography>
        <div className="nav-links">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="">Restaurants</Button>
          <Button color="inherit" component={Link} to="">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
