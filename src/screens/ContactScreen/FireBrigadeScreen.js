import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const FireBrigadeScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        {" "}
        <h3 className="heading text-center pt-1 my-2">Fire Brigade:</h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title>Fire Brigade</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Shanti Colony Chowk, Nagri Road, Dhamtari
                </Card.Subtitle>
                <Card.Text>Phone : 07722240701</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FireBrigadeScreen;
