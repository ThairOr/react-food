import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { json } from "react-router-dom";
function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9519ae763bb54f5a9ba343e6c02f8880&number=10`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log("data :>> ", data);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular &&
            popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card
                    style={{
                      width: "15rem",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Link to={"/recipe/" +  recipe.id} >
                    <Card.Img src={recipe.image} />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      </Card.Body>
                      </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          ;
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
