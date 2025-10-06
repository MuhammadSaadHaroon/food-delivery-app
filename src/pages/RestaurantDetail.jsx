import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }, [id]);

  if (!restaurant) return <Typography>Loading...</Typography>;

  return (
    <>
    <Navbar />
    <Container sx={{ mt: 5 }} style={{width: "60%"}}>
      <Typography variant="h4" gutterBottom>
        🍴 {restaurant.name}
      </Typography>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px", height: "300px" }}
      />
      <Typography variant="h6">⏱ Cooking Time: {restaurant.cookTimeMinutes} min</Typography>
      <Typography variant="h6">👨‍🍳 Difficulty: {restaurant.difficulty}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {restaurant.instructions}
      </Typography>

      <Typography variant="h5" sx={{ mt: 4 }}>
        🧂 Ingredients
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }} >
        {restaurant.ingredients?.map((ing, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography>{ing}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
     <Button
  variant="outlined"
  color="primary"
  sx={{
    mt: 1,
    mr: 1,
    textTransform: "none",
    borderRadius: "10px",
    px: 2,
  }}
>
  🛒 Add to Cart
</Button>

<Button
  variant="contained"
  color="success"
  sx={{
    mt: 1,
    textTransform: "none",
    borderRadius: "10px",
    px: 2,
  }}
>
  🚀 Order Now
</Button>
<br />
<br />
<br />

    </Container>
    </>
  );
};

export default RestaurantDetail;
