import React from "react";
import { Navbar, Button } from "react-bootstrap";

const ShopFooter = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="text-center text-white mx-auto"
      sticky="bottom"
    >
      <span className="mx-auto">
        Get your own shop's website:{" "}
        <Button
          variant="success"
          href="/aboutshop"
          className=" text-capitalize btn mx-1"
        >
          Read More
        </Button>
      </span>
    </Navbar>
  );
};

export default ShopFooter;
