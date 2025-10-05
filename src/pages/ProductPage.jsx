import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const data = {
  1: { name: "Pizza Mania", desc: "Tasty pizzas with multiple toppings" },
  2: { name: "Burger Hub", desc: "Crispy fries & juicy burgers" },
  3: { name: "Biryani House", desc: "Delicious biryani and raita combo" },
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data[id];

  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">{item.name}</Typography>
      <Typography variant="body1" sx={{ maxWidth: 400, textAlign: "center" }}>
        {item.desc}
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default ProductPage;
