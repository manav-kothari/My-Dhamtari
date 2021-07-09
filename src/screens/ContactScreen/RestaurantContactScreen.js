import React from "react";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";

const RestaurantContactScreen = () => {
  return (
    <div>
      <Header />
      <h2 className="heading text-center pt-1 my-2">Restaurants:</h2>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <Card.Title>Route30 cafe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Near Sorid pool, Bastar road, Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 8305226762</Card.Text>
              <Card.Link href="https://www.google.com/maps/place/Route30+cafe/@20.6995693,81.524148,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2f29b22e0d6553:0xbe51b30172320f1!8m2!3d20.6995695!4d81.5329028">
                <strong>Directions</strong>
              </Card.Link>
              <Card.Link href="https://www.instagram.com/route30cafe/">
                <strong>Instagram</strong>
              </Card.Link>
              <Card.Link href="//api.whatsapp.com/send?phone=918739979106">
                <strong>WhatsApp</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Sadda Adda</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 9691581113</Card.Text>
              <Card.Link href="https://www.google.com/maps/place/Sadda+Adda/@20.6700774,81.5467161,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2f273297c3f2b5:0x1d0328d5a93e5a33!8m2!3d20.6700782!4d81.5554666">
                <strong>Directions</strong>
              </Card.Link>
              <Card.Link href="https://www.instagram.com/sadda_adda_cg05/">
                <strong>Instagram</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Green Restaurant And Cafe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Green Adventure Resort, Gangrel Dam Road, Dhamtari, Chhattisgarh
                493773
              </Card.Subtitle>
              <Card.Text>Phone : 9826912344</Card.Text>
              <Card.Link href="https://www.google.com/maps/place/Green+Restaurant+And+Cafe/@20.6175723,81.5524017,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2f2798a7b08733:0xca6a10d857742ca9!8m2!3d20.6175725!4d81.5611565">
                <strong>Directions</strong>
              </Card.Link>
              <Card.Link href="https://www.instagram.com/sadda_adda_cg05/">
                <strong>Instagram</strong>
              </Card.Link>
              <Card.Link href="//api.whatsapp.com/send?phone=918305952081">
                <strong>WhatsApp</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="alert alert-info text-center blink_me p-3 my-5 h4 text-dark">
        More details will be listed soon...
      </div>
      <Navbar
        bg="dark"
        variant="dark"
        className="footer text-center text-white"
      >
        <span className=" mx-auto">
          If you want to list contact information of any restaurant than{" "}
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

export default RestaurantContactScreen;
