import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';



function Filtered() {
  const param = useParams();
const [filterRecipe, setFilterRecipe] = useState([]);

  const fetchRecipes = async (dietstring) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY3}&diet=${dietstring}`
    );
    const data = await api.json();
    console.log("data :>> ", data);
    setFilterRecipe(data.results);
  };

  useEffect(() => {
    fetchRecipes(param.value);
  }, [param.value]);



    return (
      
      <div> 
       
        <Filter />
            {
        <Row className="justify-content-md-center">
          {filterRecipe &&
            filterRecipe.map((items) => {
              return (
                <Col xs={4} key={items.id}>
                  <Card
                    style={{ width: "15rem", margin: "1rem", border:" solid #eb484e" }}
                    
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
  )
}

export default Filtered
