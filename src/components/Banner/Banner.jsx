import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Banner.css";

const Banner = () => {
  return (
    <Box className="banner">
      <Typography variant="h3" className="banner-title">
        Delicious Food Delivered To You 🍔
      </Typography>
      <Button variant="contained" color="secondary">
        Order Now
      </Button>
    </Box>
  );
};

export default Banner;
