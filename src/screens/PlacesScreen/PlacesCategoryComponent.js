import React from "react";

const PlacesCategoryComponent = ({
  link = "/places",
  title = "Title",
  Img = "",
}) => {
  return (
    <a href={link}>
      <div className="placecatecard">
        <img className="placecateimg" src={Img} alt={title} />
        <p className="placecatetitle">{title}</p>
      </div>
    </a>
  );
};

export default PlacesCategoryComponent;
