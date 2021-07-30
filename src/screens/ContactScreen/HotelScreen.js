import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import ContactDetailCard from "./ContactDetailCard";
import hoteldata from "./data/hotel";

const HotelScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">Hotels & Resorts:</h3>
      <div className="">
        {" "}
        <Row className="row p-2 text-center">
          {hoteldata.map((categorydata, index) => (
            <Col key={index} sm={12} md={6} lg={6} xl={3}>
              <ContactDetailCard categorydata={categorydata} />
            </Col>
          ))}
        </Row>
        <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
          More Hotels details will be listed soon...
        </div>
      </div>
    </div>
  );
};

export default HotelScreen;
