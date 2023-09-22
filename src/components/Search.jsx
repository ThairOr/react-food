import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <div>
      <form role="form" onSubmit={submitHandler}> 
        <div className="form-group">
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="form-control empty "
            id="iconified"
            placeholder="&#xF002;"
          />
        </div>
      </form>
    </div>
  );
}
export default Search;
