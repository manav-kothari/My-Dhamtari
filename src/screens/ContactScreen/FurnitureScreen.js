import React from "react";
import { Row, Col, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";
import ContactDetailCard from "./ContactDetailCard";
import furnituredata from "./data/furniture";

const FurnitureScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">Furniture & Interior:</h3>
      <div className="">
        {" "}
        <Row className="row p-2 text-center">
          {furnituredata.map((categorydata, index) => (
            <Col key={index} sm={12} md={6} lg={6} xl={3}>
              <ContactDetailCard categorydata={categorydata} />
            </Col>
          ))}
        </Row>
        <div className="alert alert-info text-center blink_me p-3 my-5 h4 text-dark">
          More details will be listed soon...
        </div>
        <Navbar className=" text-center text-dark mx-auto pt-4">
          <span className="mx-auto">
            If you want to list any contact detail here for FREE then{" "}
            <Button
              variant="info"
              href="//api.whatsapp.com/send?phone=917415519777"
              className=" text-capitalize btn my-1"
            >
              Contact Us
            </Button>
            <br />
          </span>
        </Navbar>
      </div>
    </div>
  );
};

export default FurnitureScreen;
