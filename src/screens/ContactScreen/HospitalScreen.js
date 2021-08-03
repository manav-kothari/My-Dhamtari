import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import ContactDetailCard from "./ContactDetailCard";
import hospitaldata from "./data/hospital";
const HospitalScreen = () => {
  return (
    <div>
      <Header />
      <h2 className="heading text-center pt-1 my-2">Hospitals & Clinics:</h2>
      <div className="">
        <Row className="row p-2 text-center">
          {hospitaldata.map((categorydata, index) => (
            <Col key={index} sm={12} md={6} lg={6} xl={3}>
              <ContactDetailCard categorydata={categorydata} />
            </Col>
          ))}
        </Row>
        <div className="alert alert-info text-center blink_me p-3 my-5 h4 text-dark">
          More Hospitals details will be listed soon...
        </div>
      </div>
    </div>
  );
};

export default HospitalScreen;
