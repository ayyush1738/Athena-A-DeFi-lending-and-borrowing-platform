// import { Link } from "react-router-dom";
import {Col,Container,Row} from "reactstrap";
import "./login.css";
import { WorldIDWidget } from '@worldcoin/id'

import Circle from "../assets/Ellipse 1.png";
// import { useEffect, useState } from "react";

const Verification = () => {
  

  return (

    <Container className="login1" fluid={true}>
      <Row>
        <Col
          lg={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="glass">
            <div style={{paddingBottom:"20px", fontSize:"2rem"}}>
              Authentification
            </div>
            <div style={{fontSize:"0.7rem", paddingBottom:"50px"}}>
            World ID is a way to anonymously verify someone is an actual person performing an action, and that they have performed that action only once (without revealing anything about themselves)
            </div>
          <WorldIDWidget actionId="123" signal="123"/>
          <div id="world-id-container"></div>
          <div className="captcha"></div>
          </div>
          </Col>      
          <Col lg={8} className="d-flex  justify-content-center">
          <img src={Circle} alt="MyCircle" className="circle" />
        
        </Col>
      </Row>
      
    </Container>
  );
};

export default Verification;