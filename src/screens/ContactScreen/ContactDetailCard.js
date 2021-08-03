import React from "react";
import { Card } from "react-bootstrap";

const ContactDetailCard = ({ categorydata }) => {
  //   const {
  //     title,
  //     address,
  //     number1,
  //     number2,
  //     number3,
  //     directions,
  //     instagram,
  //     whatsapp,
  //   } = categorydata;
  return (
    <div>
      <Card className="my-2">
        <Card.Body>
          <Card.Title>{categorydata.title}</Card.Title>
          <Card.Text className="mb-2 text-dark">
            {categorydata.description}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {categorydata.address}
          </Card.Subtitle>
          <Card.Text>
            Phone :{" "}
            {categorydata.number1 === "" ? "N/A" : `${categorydata.number1}`}
            {categorydata.number2 === "" ? "" : `, ${categorydata.number2}`}
            {categorydata.number3 === "" ? "" : `, ${categorydata.number3}`}
          </Card.Text>
          {categorydata.directions === "" ? (
            <></>
          ) : (
            <Card.Link href={categorydata.directions}>
              <strong>Directions</strong>
            </Card.Link>
          )}
          {categorydata.instagram === "" ? (
            <></>
          ) : (
            <Card.Link href={categorydata.instagram}>
              <strong>Instagram</strong>
            </Card.Link>
          )}
          {categorydata.whatsapp === "" ? (
            <></>
          ) : (
            <Card.Link href={categorydata.whatsapp}>
              <strong>Whatsapp</strong>
            </Card.Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactDetailCard;
