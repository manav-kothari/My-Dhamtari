import React from "react";
import { Button } from "react-bootstrap";

const CategoryCardComponent = ({ title, image, link }) => {
  return (
    <>
      <a href={link}>
        <div class="homecard">
          <img src={image} className="homelogo mb-1" alt="logo" />
          <Button variant=" btn-block btn-primary">{title}</Button>
        </div>
      </a>
    </>
  );
};

export default CategoryCardComponent;
