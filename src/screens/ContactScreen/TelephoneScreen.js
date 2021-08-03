import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const TelephoneScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        {" "}
        <h3 className="heading text-center pt-1 my-2">Telephone Office:</h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>Telephone Office (BSNL)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Itwari Bazar, Dhamtari, Chhattisgarh 493773
                </Card.Subtitle>
                <Card.Text>Phone : 07722237000</Card.Text>
                <Card.Link href="https://goo.gl/maps/8Zs1EBqeXzbLCacTA">
                  <strong>Directions</strong>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title>Bsnl Complain (Complaint Office)</Card.Title>

                <Card.Text>Phone : 07722237198</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TelephoneScreen;
