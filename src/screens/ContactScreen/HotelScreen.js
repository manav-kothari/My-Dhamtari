import React from "react";
import { Navbar, Button, Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const FlowerScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">Hotels & Resorts:</h3>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <Card.Title>
                Maharana Pratap marriage garden and resort
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Vivekanand Colony, Street no. 3, Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 8770011589</Card.Text>

              <Card.Link href="https://goo.gl/maps/MWCKLr1KN7UnTzteA">
                <strong>Directions and Photos</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white"
        fixed="bottom"
      >
        <span className=" mx-auto">
          If you want to list the contact information of any Hotel or Resort,
          then{" "}
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

export default FlowerScreen;
