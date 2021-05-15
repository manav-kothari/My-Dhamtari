import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";

const ShopComingSoonScreen = () => {
  return (
    <>
      <Header></Header>

      <div className="aler alert-danger text-center blink_me p-4 my-5 text-capitalize h2 text-dark">
        Shops Coming Soon...
      </div>

      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white mx-auto"
        fixed="bottom"
      >
        <span className="mx-auto">
          Get your own shop's website:{" "}
          <Button
            variant="info"
            href="/aboutshop"
            className=" text-capitalize btn mx-1"
          >
            Read More
          </Button>
        </span>
      </Navbar>
    </>
  );
};

export default ShopComingSoonScreen;
