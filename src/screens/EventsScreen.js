import React from "react";
import { Button, Navbar, Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Cake from "../images/event/cake.jpg";
import english from "../images/event/english.jpg";
import Shubham from "../images/event/Shubham.jpg";

const EventsScreen = () => {
  return (
    <>
      <Header></Header>
      <h1 className="text-center p-2 mt-2 heading" as="h1">
        Upcoming Events
      </h1>
      <Row className="row p-1 text-center">
        <Col sm={12} md={6} lg={6} xl={4}>
          <Card className="my-2 rounded">
            <Card.Img
              className="event-card-img-top embed-responsive-item"
              variant="top"
              src={Cake}
            />
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={4}>
          <Card className="my-2 rounded">
            <Card.Img
              className="event-card-img-top embed-responsive-item"
              variant="top"
              src={english}
            />
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={4}>
          <Card className="my-2 rounded">
            <Card.Img
              className="event-card-img-top embed-responsive-item"
              variant="top"
              src={Shubham}
            />
          </Card>
        </Col>
      </Row>
      {/* <div className="aler alert-danger text-center blink_me p-3 my-5 text-capitalize h2 text-dark">
        No events happening
        <br />
        due to COVID
      </div> */}
      <Navbar
        bg="dark"
        variant="dark"
        className=" text-center text-white mx-auto"
        position="bottom"
      >
        <span className="mx-auto">
          If you want to list any Event or any type of Classes here than{" "}
          <Button
            variant="info"
            href="//api.whatsapp.com/send?phone=917415519777"
            className=" text-capitalize btn"
          >
            Contact Us
          </Button>
          <br />
        </span>
      </Navbar>
    </>
  );
};

export default EventsScreen;
