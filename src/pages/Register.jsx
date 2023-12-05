import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../contexts/AuthContesxt";
// import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import "../style/Register.css";
function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email =>", email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("Password=>", password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    register(email, password);
    try {
      await register(email, password), navigate("/recipes");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="register">
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
