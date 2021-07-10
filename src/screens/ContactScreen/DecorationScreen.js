import React from "react";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";

const DecorationScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">
        Accounting related services:
      </h3>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <Card.Title>Royal Decoration</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 8103377158, 6266360982, 8103832003</Card.Text>

              <Card.Link href="https://www.instagram.com/royal.balloon.decoration/">
                <strong>Instagram</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
        More details will be listed soon...
      </div>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white"
        fixed="bottom"
      >
        <span className=" mx-auto">
          If you want to list contact information of anyone who provides
          services regarding decoration then{" "}
          <Button
            href="//api.whatsapp.com/send?phone=917415519777"
            variant="info"
            className=" text-capitalize btn"
          >
            Contact Us
          </Button>
        </span>
      </Navbar>
    </div>
  );
};

export default DecorationScreen;
