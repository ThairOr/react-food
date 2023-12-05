import Home from "./Home";
import React from "react";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Filtered from "./Filtered";
// import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "../components/ProtectedRoute";
import Recipes from "./Recipes";
import About from "../pages/About";
import Register from "./Register";
import ErrorPage from "../pages/ErrorPage";
import Login from "./Login";
import RecipeDetials from "./RecipeDetials";
import Chat from "./Chat";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <Recipes />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/" element={<ErrorPage />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<RecipeDetials />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/filtered/:value" element={<Filtered />} />
      </Routes>
    </>
  );
}

export default Pages;
