import React from "react";
import { Card } from "react-bootstrap";

const PlacesCardCompnent = ({ link = "", image = "", title = "Title" }) => {
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
                {title}
              </strong>
            </Card.Title>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlacesCardCompnent;
