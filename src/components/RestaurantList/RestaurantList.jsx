import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import "./RestaurantList.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=6")
      .then((res) => res.json())
      .then((data) => setRestaurants(data.recipes));
  }, []);

  return (
    <div className="restaurant-list">
      <Typography variant="h4" gutterBottom>
        Popular Restaurants 🍽️
      </Typography>
      <br></br>
      <Grid container spacing={3} sx={{ width: "900px", margin: "0 auto" }}>
        {restaurants.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <img src={item.image} alt={item.name} className="restaurant-img" />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Button
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() => navigate(`/restaurant/${item.id}`)} // ✅ navigate with id
                >
                  View Menu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RestaurantList;
