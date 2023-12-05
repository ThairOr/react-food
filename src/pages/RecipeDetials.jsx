import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../style/recipeDetials.css";
import styled from "styled-components";
// import Comments from "./Comments";
// import Comments from "../pages/Comments"

function RecipeDetials() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let param = useParams();

  const fetchDetials = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY3
      }`
    );
    const detailData = await data.json();
    console.log("detailData :>> ", detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetials();
  }, [param.name]);

  return (
    <DetailWrapper className="wrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} />
      </div>
      <Info className="info">
        <Button
          style={{ margin: "2rem" }}
          className={activeTab === "instructions" ? "active" : ""}
          variant="outline-info"
          onClick={() => setActiveTab("instructions")}
        >
          instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          variant="outline-info"
          onClick={() => setActiveTab("ingredients")}
        >
          ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
      {/* <Comments /> */}
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div``;

const Info = styled.div``;

export default RecipeDetials;
