import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
  FormText,
  Container,
  Row,
} from "reactstrap";
import "./login.css";

import Circle from "../assets/Ellipse 1.png";
import { useState } from "react";

const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:"",
    remember:false
  })
  const handleChange=e=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })

  }
  const handleCheck=e=>{
    setData({
      ...data,
      [e.target.name]:e.target.checked
    })

  }
  const handleSubmit=e=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <Container className="login" fluid={true}>
      <Row>
        <Col
          lg={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="glass">
            <Form className="container-fluid" onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="exampleEmail" className="title">
                  Sign in
                </Label>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" className="titleunder">
                  Login to manage your account
                </Label>
              </FormGroup>
              <FormGroup row>
                <Col sm={12} className="d-flex align-items-end">
                <span className=" fa fa-light fa-envelope">

                </span>
                <div style={{
                    paddingLeft:"20px"
                  }}>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder=""
                    type="email"
                    color="#32ff7e"
                    value={data.email}
                    className="inputfield"
                    onChange={handleChange}
                  />
                  </div>
                </Col>

              </FormGroup>
              <FormGroup row>
              <Col sm={12} className="d-flex align-items-end">
                <span className=" fa fa-light fa-key">

                </span>
                  <div style={{
                    paddingLeft:"20px"
                  }}>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder=""
                    value={data.password}
                    type="password"
                    className="inputfield"
                    onChange={handleChange}
                  />
                  </div>
                </Col>
              </FormGroup>

              <FormGroup check style={{paddingTop:"10px", paddingBottom:"10px"}}>
                <Input id="checkbox2" type="checkbox" name="remember"  checked={data.remember} onChange={handleCheck}/>{" "}
                <Label check style={{fontSize:"0.7rem"}}>Remember Me</Label>
              </FormGroup>

              <FormGroup row>
                <Button className="signinbut" block={true}>
                  Sign In
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Col>

        <Col lg={8} className="d-flex  justify-content-center">
          <img src={Circle} alt="MyCircle" className="circle" />
        </Col>
      </Row>

      <Row>
        <Col lg={4} className="d-flex  justify-content-center">
        <Label
        style={{
          fontSize: "0.7rem",
          color:"fff"
        }}
      >
        Don't have an account?
      </Label>
      <Link
        className="signup"
        style={{
          fontSize: "0.7rem",
        }}
        to="/onboard"
      >
        Sign Up
      </Link>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="d-flex align-items-center justify-content-center">
        <span
        style={{
          fontSize: "0.7rem",
          color: "#0CC453",
        }}
      >
        Forgot Password?
      </span>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Login;
