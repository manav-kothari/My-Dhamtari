import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ShopCardComponent = ({ name = "Name", image = "", link = "/shops" }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={4}>
      <Card className="my-2 p-1 rounded cards">
        <a href={link}>
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
        </a>
        <Card.Body className="card-body text-center">
          <a href={link}>
            <Card.Title>
              <strong className="text-dark">{name}</strong>
            </Card.Title>
          </a>
          <a href={link}>
            <Button
              style={{ backgroundColor: "#000" }}
              variant="dark btn-block"
            >
              See Products
            </Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShopCardComponent;
