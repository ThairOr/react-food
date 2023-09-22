import Home from "./Home"
import React from 'react'
import Cuisine from "./Cuisine";
import {Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
function Pages() {
  return (
      <div>
         
          <Routes>
              <Route path="/home" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      
    </div>
  )
}

export default Pages