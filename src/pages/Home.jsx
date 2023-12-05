import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContesxt";
import Popular from "../components/Popular";

// import Veggie from "../components/Veggie";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 style={{textAlign: "center", marginTop:"1rem"}}>Hi {user?.userName}Welcome on get a recipe</h2>
      
      <Popular />
     
    </div>
  );
}

export default Home;
