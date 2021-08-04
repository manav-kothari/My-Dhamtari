import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const ElectricityScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        {" "}
        <h3 className="heading text-center pt-1 my-2">Electricity:</h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title>Electricity Office</Card.Title>
                <Card.Text>Phone : 07722233623, 07722233123</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title>CSEB Dhamtari Division</Card.Title>
                <Card.Text>Phone : 07722-237711</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
          More details will be listed soon...
        </div>
      </div>
    </div>
  );
};

export default ElectricityScreen;
