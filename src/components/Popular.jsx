import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Popular() {
  // console.log("import.meta.env.VITE_API_KEY2", import.meta.env.VITE_API_KEY2);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
        import.meta.env.VITE_API_KEY3
      }`
    );

    const data = await api.json();

    setPopular(data.recipes);
    console.log("data :>> ", data);
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: true,
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
                      border: "solid #eb484e",
                    }}
                  >
                    <Link to={"/recipe/" + recipe.id}>
                      <Card.Img src={recipe.image} />
                      <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
