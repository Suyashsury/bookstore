import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Style.css'

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    tc: false,
  });
  const onFormChange = (e, key) => {
    setLoginForm({
      ...loginForm,
      [key]: key === "tc" ? e.target.checked : e.target.value,
    });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    console.log("onLoginSubmit", loginForm);
  };
  return (
    <div className="loginpa">
      <Form onSubmit={onLoginSubmit} style={{ width: "227px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "email")}
            defaultValue={loginForm.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "password")}
            defaultValue={loginForm.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ whiteSpace: "nowrap" }}
            onChange={(e) => onFormChange(e, "tc")}
            type="checkbox"
            label="Accept terms and conditions"
          />
        </Form.Group>
        <Button className="bbt" variant="primary" type="submit">
          Login
        </Button>
        <h6>Create new accoount <Link to="signup">Signup</Link></h6> 
      </Form>
      </div>
   
  );
};
