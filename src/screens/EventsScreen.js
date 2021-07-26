import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";

const EventsScreen = () => {
  return (
    <>
      <Header></Header>
      <div className="page">
        <h2 className="text-center p-2 mt-2 heading">Latest Events</h2>

        <div className="aler alert-danger text-center blink_me p-3 my-5 text-capitalize h2 text-dark">
          No events happening
          <br />
          due to COVID
        </div>
        <Navbar className=" text-center text-dark mx-auto">
          <span className="mx-auto">
            If you want to list any Event here for FREE then{" "}
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
    </>
  );
};

export default EventsScreen;
