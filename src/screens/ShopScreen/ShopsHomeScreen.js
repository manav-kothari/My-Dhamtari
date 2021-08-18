import React from "react";
import { Button, Row, Navbar } from "react-bootstrap";
import Header from "../../components/Header";
import ShopCardComponent from "./ShopCardComponent";
import aabhivadya from "../../images/shops/aabhivadya.jpg";
import mahadev from "../../images/shops/mahadev.jpg";

const ShopScreenHome = () => {
  return (
    <div>
      <Header />
      <Row className="row p-2">
        <ShopCardComponent
          name="Aabhivadya Milks"
          image={aabhivadya}
          link="https://aabhivadyamilks.herokuapp.com/"
        />
        <ShopCardComponent name="Mahadev Agencies" image={mahadev} link="" />
      </Row>
      <Navbar className=" text-center text-dark mx-auto">
        <span className="mx-auto">
          Get your own website and showcase your products online. Contact us now
          and get started for FREE
          <Button
            variant="info"
            href="/aboutshop"
            className=" text-capitalize btn my-1"
          >
            Read More
          </Button>
          <br />
        </span>
      </Navbar>
    </div>
  );
};

export default ShopScreenHome;
