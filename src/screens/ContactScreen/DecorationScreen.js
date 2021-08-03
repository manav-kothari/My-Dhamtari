import React from "react";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";

const DecorationScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">Decoration services:</h3>
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

export default DecorationScreen;
