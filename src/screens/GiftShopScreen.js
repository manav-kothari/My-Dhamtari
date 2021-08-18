import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import ShopFooter from "../components/ShopFooter";

import memorable from "../images/shops/memorablegift.jpg";

const GiftShopScreen = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <a href="https://memorablegifts.herokuapp.com/">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src={memorable}
              />
            </a>
            <Card.Body className="text-dark text-center">
              <a href="https://memorablegifts.herokuapp.com/">
                <Card.Title>
                  <strong className="text-dark">
                    Memorable & Personalised Gifts
                  </strong>
                </Card.Title>
              </a>
              <a href="https://memorablegifts.herokuapp.com/">
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

export default GiftShopScreen;
