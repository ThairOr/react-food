import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import Category from "../components/Category"
import "../style/Filter.css"
import Search from "../components/Search";
function Filter() {
  const navigate = useNavigate();
  

  const [myDietArray, setMyDietArray] = useState([]);

  const addDietString = (e) => {
    const { value, checked } = e.target;
    const updatedArray = checked ? [...myDietArray, value] : myDietArray.filter((diet) => diet !== value);
    setMyDietArray(updatedArray)
    const dietString = updatedArray.join(",")
    navigate("/filtered/" + dietString);
    // setMyDietArray((prevState) => {
    //   const updatedArray = checked ? [...prevState, value] : prevState.filter((diet) => diet !== value);
    //   setDietString(updatedArray.join(","));
    //   return updatedArray;
    // });

  }

  

  return (
    <>
       <Search />
    <Category/>
      <div className="container-fluid top" >
        
      <div className="container mt-5  pb-5 pt-5">
        <h3 className="form-head-contact-h3" style={{textAlign: "center" }}>Get a random recipe now!</h3>
        <form
          style={{
              display: "flex",
            textAlign: "center",
            justifyContent: "space-around",
            margin: "2rem 0rem",
          }}
        >
          <div>
            <div className="d-flex justify-content-center">
              <div>
                <input
                  type="checkbox"
                  id="vegan"
                  value="vegan"
                  onClick={addDietString}
                  
                />
                <label htmlFor="vegan">Vegan</label>
                <input
                  type="checkbox"
                  id="vegetarian"
                  value="vegetarian"
                  onClick={addDietString}
                />
                <label htmlFor="vegetarian">Vegetarian</label>
                <input
                  type="checkbox"
                  id="glutenfree"
                  value="glutenfree"
                  onClick={addDietString}
                />
                <label htmlFor="glutenfree">Gluten Free</label>
                <input
                  type="checkbox"
                  id="ketogenic"
                  value="ketogenic"
                  onClick={addDietString}
                />
                <label htmlFor="ketogenic">Ketogenic</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
      </>
  );
}

  Filter.defaultProps = {
  setDietString: () => {}
};

    Filter.propTypes = {
  setDietString: PropTypes.func.isRequired
};


export default Filter;

