import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopCardComponent = ({ name, image, link }) => {
  return (
    <>
      <Card className="my-2 p-2 mx-2  rounded cards">
        <a style={{ color: "#000" }} href={link}>
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
        </a>
        <Card.Body className="text-center p-2">
          <a style={{ color: "#000" }} href={link}>
            <Card.Title>
              <strong style={{ color: "#000" }} className="text-dark">
                {name}
              </strong>
            </Card.Title>
          </a>
          <a style={{ color: "#000" }} href={link}>
            <Button
              style={{ backgroundColor: "#000" }}
              className="text-capitalize btn-block custom-btn"
            >
              See Products
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShopCardComponent;
