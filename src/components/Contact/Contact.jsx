import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="contact-section" maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Us 📞
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Message" multiline rows={4} />
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
