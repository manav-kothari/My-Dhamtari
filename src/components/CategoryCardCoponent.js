import React from "react";
import { Card, Button } from "react-bootstrap";

const CategoryCardComponent = ({ name, image, link }) => {
  return (
    <>
      <Card className="my-2 p-1 rounded cards">
        <a href={link}>
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
        </a>
        <Card.Body className="text-dark text-center">
          <a href={link}>
            <Card.Title>
              <strong className="text-dark">{name}</strong>
            </Card.Title>
          </a>
          <a href={link}>
            <Button
              variant="dark btn-block"
              style={{ backgroundColor: "#000" }}
            >
              Go to Shops
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCardComponent;
