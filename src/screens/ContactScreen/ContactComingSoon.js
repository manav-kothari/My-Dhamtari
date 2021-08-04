import React from "react";
import Header from "../../components/Header";
import { Button, Navbar } from "react-bootstrap";

const ContactComingSoon = () => {
  return (
    <div>
      <Header />

      <div className="page">
        <div className="aler alert-info text-center blink_me p-4 my-5 h4 text-dark">
          Details will be listed soon...
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
    </div>
  );
};

export default ContactComingSoon;
