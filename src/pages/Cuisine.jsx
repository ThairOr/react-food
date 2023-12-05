import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Filter from "./Filter";


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY3}&number=20&cuisine=${name}`
    );
    const items = await data.json();

    setCuisine(items.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log("params.type", params.type);
  }, [params.type]);

  return (
    <>
      {/* <Category /> */}
      <Filter/>
  <motion.div
      animate={{ opacity: 1 }}
      inlist={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      translate={{ duration: 0.5 }}
    >
      <Row className="justify-content-md-center">
        {cuisine &&
          cuisine.map((items) => {
            return (
              <Col xs={4} key={items.id}>
                <Card
                  style={{
                    width: "15rem",
                    margin: "1rem",
                    border: "solid #eb484e",
                  }}
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
      </motion.div>
      
      
      
  </>
    
  );
}

export default Cuisine;
