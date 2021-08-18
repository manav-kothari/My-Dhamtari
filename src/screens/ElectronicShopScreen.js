import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import ShopFooter from "../components/ShopFooter";

import deepak from "../images/shops/deepakelectronics2.jpg";
import anil from "../images/shops/anilradio.jpg";
import mobilepoint from "../images/shops/mobilepoint.jpg";

const ElectronicShopScreen = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="https://deepakelectronics.herokuapp.com/">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={deepak}
              />
            </a>
            <Card.Body className="card-body text-center">
              <a href="https://deepakelectronics.herokuapp.com/">
                <Card.Title>
                  <strong className="text-dark">Deepeak Electronics</strong>
                </Card.Title>
              </a>
              <a href="https://deepakelectronics.herokuapp.com/">
                <Button variant="dark btn-block">See Products</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="https://anilradio.herokuapp.com/">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={anil}
              />
            </a>
            <Card.Body className="text-dark text-center">
              <a href="https://anilradio.herokuapp.com/">
                <Card.Title>
                  <strong className="text-dark">Anil Radio</strong>
                </Card.Title>
              </a>
              <a href="https://anilradio.herokuapp.com/">
                <Button variant="dark btn-block">See Products</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="https://mobilepoint.herokuapp.com/">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={mobilepoint}
              />
            </a>
            <Card.Body className="text-dark text-center">
              <a href="https://mobilepoint.herokuapp.com/">
                <Card.Title>
                  <strong className="text-dark">Mobile Point</strong>
                </Card.Title>
              </a>
              <a href="https://mobilepoint.herokuapp.com/">
                <Button variant="dark btn-block">See Products</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ShopFooter></ShopFooter>
    </div>
  );
};

export default ElectronicShopScreen;
