import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from 'react-bootstrap';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let param = useParams();

  const getSearchedRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9519ae763bb54f5a9ba343e6c02f8880&query=${name}`
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
                      <Card.Img variant="top" src={items.image} />
                    </Col>
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                    </Card.Body>
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
