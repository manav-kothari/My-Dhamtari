import React from "react";
// import { Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";
import jadugar from "../images/event/jadugar.jpg";
import ganesh from "../images/event/ganesh.jpg";
import { Row, Col, Card } from "react-bootstrap";

const EventsScreen = () => {
  return (
    <>
      <Header></Header>
      <div className="">
        <h2 className="text-center p-2 mt-2 heading">Latest Events</h2>
        <Row>
          <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="mb-2 p-1 rounded">
              <Card.Img className="" variant="top" src={ganesh} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="mb-2 p-1 rounded">
              <Card.Img className="" variant="top" src={jadugar} />
            </Card>
          </Col>
        </Row>

        {/* <h2 className="text-center my-4">No Events Found...</h2>
        <Navbar className=" text-center text-dark mx-auto">
          <span className="mx-auto">
            If you want to list any Event then{" "}
            <Button
              variant="info"
              href="//api.whatsapp.com/send?phone=917415519777"
              className=" text-capitalize btn my-1"
            >
              Contact Us
            </Button>
            <br />
          </span>
        </Navbar> */}
      </div>
    </>
  );
};

export default EventsScreen;
