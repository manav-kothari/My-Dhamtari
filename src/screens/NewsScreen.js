import React from "react";
import { Row, Col, Button, Navbar } from "react-bootstrap";
import Header from "../components/Header";
import patrika from "../images/news/patrika.PNG";
import naidunia from "../images/news/naidunia-logo.png";
import nb from "../images/news/nb-logo.png";
import haribhoomi from "../images/news/haribhoomi.png";

import NewsCardComponent from "../components/NewsCardComponent";

const NewsScreen = () => {
  return (
    <>
      <Header></Header>

      <h1 className="text-center p-1">Local E-Paper</h1>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <NewsCardComponent
            name="Dhamtari Bhoomi"
            image={haribhoomi}
            link="https://www.haribhoomi.com/epaper/raipur-dhamtari-bhumi"
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <NewsCardComponent
            name="Navbharat"
            image={nb}
            link="https://epaper.navabharat.news/category/16/dhamtari"
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <NewsCardComponent
            name="Naidunia"
            image={naidunia}
            link="https://epaper.naidunia.com/mepaper/edition-today-dhamtari-44.html"
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <NewsCardComponent
            name="Patrika"
            image={patrika}
            link="https://epaper.patrika.com/chhattisgarh/dhamtari"
          />
        </Col>
      </Row>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white"
        sticky="bottom"
      >
        <span className=" mx-auto">
          If you want to list your News Website than{" "}
          <Button
            href="//api.whatsapp.com/send?phone=917415519777"
            variant="info"
            className=" text-capitalize btn"
          >
            Contact Us
          </Button>
        </span>
      </Navbar>
    </>
  );
};

export default NewsScreen;
