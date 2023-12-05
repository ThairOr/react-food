import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let param = useParams();
  const getSearchedRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY3
      }&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearchedRecipes(param.search);
  }, [param.search]);

  return (
    <div>
      {
        <Row className="justify-content-md-center">
          {searchedRecipes &&
            searchedRecipes.map((items) => {
              return (
                <Col xs={4}>
                  <Card
                    style={{ width: "15rem", margin: "1rem" }}
                    key={items.id}
                  >
                    <Col>
                      <Link to={"/recipe/" + items.id}>
                        <Card.Img variant="top" src={items.image} />
                      </Link>
                    </Col>
                    <Link to={"/recipe/" + items.id}>
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      }
    </div>
  );
}

export default Searched;
