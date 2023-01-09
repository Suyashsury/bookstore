import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form onSubmit={onLoginSubmit} style={{ width: "200px" }}>
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
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
