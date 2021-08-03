import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const BloodBankScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        {" "}
        <h3 className="heading text-center pt-1 my-2">Blood Bank :</h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>Dhamtari Blood Bank</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Subhash Nagar, Dhamtari, Chhattisgarh 493773
                </Card.Subtitle>
                <Card.Text>Phone : 07722235888</Card.Text>
                <Card.Link href="https://goo.gl/maps/wT6NkYesmRQ7Wgdp8">
                  <strong>Directions</strong>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BloodBankScreen;
