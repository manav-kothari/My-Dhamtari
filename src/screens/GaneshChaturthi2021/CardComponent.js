import React from "react";
import { Card, Col } from "react-bootstrap";

const CardComponent = ({ name = "", image = "" }) => {
  return (
    <div>
      <Col sm={12} md={12} lg={12} xl={12}>
        <Card className="my-2 p-1 rounded cards">
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
          <Card.Body className="card-body text-center mt-3 p-0">
            <Card.Title>
              <strong className="text-dark">Location: {name}</strong>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardComponent;
