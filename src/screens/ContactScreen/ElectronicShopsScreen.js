import React from "react";
import { Navbar, Button, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import electronicshopsdata from "./data/electronicshops";
import ContactDetailCard from "./ContactDetailCard";

const ElectronicShopsScreen = () => {
  return (
    <div>
      <Header />
      <h2 className="heading text-center pt-1 my-2">Electronics Shops:</h2>

      <Row className="row p-2 text-center">
        {electronicshopsdata.map((categorydata, index) => (
          <Col key={index} sm={12} md={6} lg={6} xl={3}>
            <ContactDetailCard categorydata={categorydata} />
          </Col>
        ))}
      </Row>
      <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
        Contact details will be listed soon...
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
  );
};

export default ElectronicShopsScreen;
