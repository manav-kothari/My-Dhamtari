import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";

const EventsScreen = () => {
  return (
    <>
      <Header></Header>
      <h1 className="text-center p-2 mt-2" as="h1">
        Upcoming Events
      </h1>
      <div className="aler alert-danger text-center blink_me p-3 my-5 text-capitalize h2 text-dark">
        No events happening
        <br />
        due to COVID
      </div>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white mx-auto"
        fixed="bottom"
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
        </span>
      </Navbar>
    </>
  );
};

export default EventsScreen;
