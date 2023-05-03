import { useState } from "react";
import { Card, Col,Row } from "reactstrap";
import "./mainpage.css";
import Arrow from  "../assets/right-arrow-w.png";

const MainPage=()=>{
    return(
        <div className="container" fluid="true">
            <Row>
            <Col lg={1} className="d-flex align-items-center justify-content-center navbar">
            <img src={Arrow} alt="MyArrow" className="arrow" />
            <div className="sidenav">
   <a href="#" >About</a>
   <a href="#">Services</a>
   <a href="#">Clients</a>
   <a href="#">Contact</a>
    </div>

            </Col>
            <Col lg={11}>
                <Card>
                    <Card.heading>
                        
                    </Card.heading>
                </Card>
                
            </Col>
            </Row>
        </div>
    );
};

export default MainPage;
