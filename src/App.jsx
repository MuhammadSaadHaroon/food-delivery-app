import React, { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFinish = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loader onFinish={handleFinish} />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/signup"
          element={<Signup setRegisteredUser={setRegisteredUser} />}
        />

        <Route
          path="/login"
          element={<Login registeredUser={registeredUser} setUser={setUser} />}
        />

        <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />

        <Route
          path="/restaurant/:id"
          element={user ? <RestaurantDetail /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
