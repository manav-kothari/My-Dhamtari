import React from "react";
import { Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";

const AutomobileScreen = () => {
  return (
    <div>
      <Header />
      <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
        Contact details will be listed soon...
      </div>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white"
        fixed="bottom"
      >
        <span className=" mx-auto">
          If you want to list the contact information of anyone who sells a car,
          bike, etc. or provides services regarding automobiles, then{" "}
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

export default AutomobileScreen;
