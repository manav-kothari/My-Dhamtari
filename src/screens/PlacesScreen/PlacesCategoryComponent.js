import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlacesCategoryComponent = ({
  link = "/places",
  title = "Title",
  Img = "",
}) => {
  return (
    <Link to={link}>
      <div className="placecatecard">
        <img className="placecateimg" src={Img} />
        <p className="placecatetitle">{title}</p>
      </div>
    </Link>
  );
};

export default PlacesCategoryComponent;
