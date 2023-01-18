import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Style.css'
import {Link} from 'react-router-dom'

export const Signup = () => {
  const[formdata,setFormdata]=useState({
    fname:"",
    email:"",
    password:"",
    mo:"",
    tc:"false"
  })

  const  onDatachange=(e,key)=>{
    setFormdata({
      ...formdata,
      [key]:e.target.value
    })
    }
// const  onNamechange=(e)=>{
// setFormdata({
//   ...formdata,
//   fname:e.target.value
// })
// }
// const  onEmailchange=(e)=>{
//   setFormdata({
//     ...formdata,
//     email:e.target.value
//   })
//   }
  // const  onTc=(e)=>{
  //   setFormdata({
  //     ...formdata,
  //     tc:e.target.checked
  //   })
  //   }



  const onSubmit=(e)=>{
    e.preventDefault();

    console.log("onLSignupSubmit",formdata);
  }
  return (
    <div className='signupf'>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Full name</Form.Label>
      <Form.Control defaultValue={formdata.fname}   onChange={(e)=>onDatachange(e,"fname")}     type="text" placeholder="Enter name" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email id</Form.Label>
      <Form.Control defaultValue={formdata.email}   onChange={(e)=>onDatachange(e,"email")}  type="email" placeholder="Enter email" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control defaultValue={formdata.password}   onChange={(e)=>onDatachange(e,"password")}   type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone number</Form.Label>
      <Form.Control defaultValue={formdata.mo}   onChange={(e)=>onDatachange(e,"mo")}  type="tel" placeholder="Enter Number" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check defaultValue={formdata.tc}   onChange={(e)=>onDatachange(e,"tc")} type="checkbox" label="Accept terms and conditions" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Signup
    </Button>
    <h6>Already account <Link to="/">Login</Link></h6>
  </Form>
  </div>
  )
}
