import React from "react";
import { Row, Col, Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";
import ShopCardComponent from "../components/ShopCardComponent";

import bakers from "../images/shops/bakersdestination.jpg";

const BakeryShopScreen = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <ShopCardComponent
            name="Baker's Destination"
            image={bakers}
            link="https://bakersdestination.herokuapp.com/"
          />
        </Col>
      </Row>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white mx-auto"
        fixed="bottom"
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
    </div>
  );
};

export default BakeryShopScreen;
