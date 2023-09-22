import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import React from 'react'
import Cuisine from "./Cuisine";




function Home() {
  return (
    <div>
      
          <Cuisine />
          <Veggie />
          <Popular />
          
          
    </div>
  )
}

export default Home