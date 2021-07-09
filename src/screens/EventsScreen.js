import React from "react";
import { Button, Navbar, Card } from "react-bootstrap";
import Header from "../components/Header";
import Cake from "../images/event/cake.jpg";

const EventsScreen = () => {
  return (
    <>
      <Header></Header>
      <h1 className="text-center p-2 mt-2 heading" as="h1">
        Upcoming Events
      </h1>
      <Card className="my-2 mx-1 rounded">
        <Card.Img
          className="event-card-img-top embed-responsive-item"
          variant="top"
          src={Cake}
        />
        <Card.Title className="text-center mt-2">
          <h4>
            {" "}
            <strong className="text-dark">Cake Workshop</strong>
          </h4>
        </Card.Title>
      </Card>
      {/* <div className="aler alert-danger text-center blink_me p-3 my-5 text-capitalize h2 text-dark">
        No events happening
        <br />
        due to COVID
      </div> */}
      <Navbar
        bg="dark"
        variant="dark"
        className="footer text-center text-white mx-auto"
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
