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
        const check = localStorage.getItem("veggie");
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
                const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=9519ae763bb54f5a9ba343e6c02f8880&number=10&tags=vegetarian`
    );
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
    setVeggie(data.recipes);
    console.log("data :>> ", data);
        }

  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{ perPage: 3, arrows:false, pagination: false, drag: "free", gap: "2rem" }}
        >
          {veggie &&
            veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card style={{ width: "15rem", overflow: "hidden", position: "relative" }}>
                    <Link to={"/recipe/" + recipe.id}>
                    <Card.Img src={recipe.image} />
                    <Card.Body>
                      <Card.Title >{recipe.title}</Card.Title>
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


export default Veggie