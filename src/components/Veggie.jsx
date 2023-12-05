import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${
        import.meta.env.VITE_API_KEY3
      }`
    );
    const data = await api.json();

    setVeggie(data.recipes);
    console.log("data :>> ", data);
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie &&
            veggie.map((recipe) => {
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

export default Veggie;
