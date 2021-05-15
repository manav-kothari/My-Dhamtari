import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCardComponent = ({ name, image, link }) => {
  return (
    <>
      <Card className="my-2 p-1 rounded cards">
        <a href={link}>
          <Card.Img
            className="news-card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
        </a>
        <Card.Body className="text-center">
          <a href={link}>
            <Card.Title>
              <strong className="text-dark">{name}</strong>
            </Card.Title>
          </a>
          <a href={link}>
            <Button
              variant="dark btn-block"
              className="text-capitalize"
              style={{ backgroundColor: "#000" }}
            >
              Read News
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsCardComponent;
