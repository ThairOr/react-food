import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

function Recipe() {
    const [detail, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
  let param = useParams();

  const fetchDetials = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=9519ae763bb54f5a9ba343e6c02f8880`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetials();
  }, [param.name]);

  return (
    <DetailWrapper>
        <Card
          style={{ width: "15rem", overflow: "hidden", position: "relative" }}
        >
            <Card.Img src={detail.image} />
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
            </Card.Body>
          </Card>
          <Info>
              <Button className={activeTab === "instructions" ? "active" : ""} variant="outline-info" onClick={()=> setActiveTab("instructions")}>instructions</Button>
              <Button className={activeTab === "ingredients" ? "active" : ""}  variant="outline-info" onClick={() => setActiveTab("ingredients")}>ingredients</Button>
          </Info> 
          
      
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div``
const Info = styled.div``
export default Recipe;
