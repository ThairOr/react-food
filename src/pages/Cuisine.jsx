import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9519ae763bb54f5a9ba343e6c02f8880&cuisine=${name}`
    );
    const items = await data.json();

    setCuisine(items.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log("params.type", params.type);
  }, [params.type]);

  return (
    <div>
      <Row className="justify-content-md-center">
        {cuisine &&
          cuisine.map((items) => {
            return (
              
              <Col xs={4}>
                <Card style={{ width: "15rem", margin: "1rem", border: "solid #B9CFE6" }} key={items.id}>
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
    </div>
  );
}

export default Cuisine;
