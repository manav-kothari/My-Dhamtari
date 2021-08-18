import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import ShopFooter from "../components/ShopFooter";

import jeans from "../images/shops/jeans.com";
import sangam from "../images/shops/sangam.jpg";

const ClothingShopScreen = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="/shopcomingsoon">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={jeans}
              />
            </a>
            <Card.Body className="card-body text-center">
              <a href="/shopcomingsoon">
                <Card.Title>
                  <strong className="text-dark">Jeans.com</strong>
                </Card.Title>
              </a>
              <a href="/shopcomingsoon">
                <Button variant="dark btn-block">See Products</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="https://sangamnx.herokuapp.com/">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={sangam}
              />
            </a>
            <Card.Body className="text-dark text-center">
              <a href="https://sangamnx.herokuapp.com/">
                <Card.Title>
                  <strong className="text-dark">Sangam</strong>
                </Card.Title>
              </a>
              <a href="https://sangamnx.herokuapp.com/">
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

export default ClothingShopScreen;
