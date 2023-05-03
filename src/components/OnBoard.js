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

const OnBoard = () => {
  const [data,setData]=useState({
    email:"",
    password:"",
    repassword:"",
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
          lg={5}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="glass">
            <Form className="container-fluid" onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="exampleEmail" className="title">
                  Hello there!
                </Label>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" className="titleunder">
                  Join us today on your crypto journey!
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
                <span className=" fa fa-regular fa-key">

                </span>
                  <div style={{
                    paddingLeft:"20px",
                    fontSize:"0.5rem"
                  }}>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    value={data.password}
                    type="password"
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
                    id="exampleRePassword"
                    name="repassword"
                    placeholder="confirm"
                    value={data.repassword}
                    type="password"
                    className="inputfield"
                    onChange={handleChange}
                  />
                  </div>
                </Col>
              </FormGroup>
              <FormGroup check style={{paddingTop:"10px", paddingBottom:"10px"}}>
                <Input id="checkbox2" style={{cursor:"pointer"}} type="checkbox" name="remember"  checked={data.remember} onChange={handleCheck}/>{" "}
                <Label check style={{fontSize:"0.7rem"}}>I agree to the terms and conditions </Label>
              </FormGroup>

              <FormGroup row>
                <Link  to="/verify">
                <Button className="signinbut" block={true}>
                  Continue
                </Button>
                </Link>
              </FormGroup>
            </Form>
          </div>
        </Col>

        <Col lg={7} className="d-flex  justify-content-center">
          <img src={Circle} alt="MyCircle" className="circle" />
        </Col>
      </Row>

      <Row>
        <Col lg={5} className="d-flex  justify-content-center">
      <span
        className="signup"
        style={{
          fontSize: "0.7rem",
        }}
      >
        Terms and Conditions
      </span>
        </Col>
      </Row>      
    </Container>
  );
};

export default OnBoard;
