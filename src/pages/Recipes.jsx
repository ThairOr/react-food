import React from "react";
// import { motion } from "framer-motion";
import Cuisine from "../pages/Cuisine";
// import Category from "../components/Category"
import { AuthContext } from "../contexts/AuthContesxt";
import { useContext } from "react";
import Veggie from "../components/Veggie";

function Recipes() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div
        animate={{ opacity: 1 }}
        inlist={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        translate={{ duration: 0.5 }}
      >
        {/* <Category /> */}
        <Cuisine />
        <Veggie />
      </div>
    </>
  );
}

export default Recipes;
