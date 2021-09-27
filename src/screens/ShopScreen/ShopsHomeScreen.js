import React from "react";
import { Button, Row, Navbar } from "react-bootstrap";
import Header from "../../components/Header";
import ShopCardComponent from "./ShopCardComponent";
import aabhivadya from "../../images/shops/aabhivadya.jpg";
import aradhna from "../../images/shops/aradhna.jpg";
import mahadev from "../../images/shops/mahadev.jpg";
import bas from "../../images/shops/bas.jpg";

const ShopScreenHome = () => {
  return (
    <div>
      <Header />
      <Row className="row p-2">
        <ShopCardComponent
          name="Basakhmal and Sons"
          image={bas}
          link="https://basakhmalandsons.com/"
        />
        <ShopCardComponent
          name="Aabhivadya Milks"
          image={aabhivadya}
          link="https://aabhivadyamilks.herokuapp.com/"
        />
        <ShopCardComponent
          name="Aradhna Traders"
          image={aradhna}
          link="/comingsoon"
        />
        <ShopCardComponent
          name="Mahadev Agencies"
          image={mahadev}
          link="/comingsoon"
        />
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
