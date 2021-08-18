import React from "react";

const CategoryCardComponent = ({ title, image, link }) => {
  return (
    <>
      <a href={link}>
        <div class="homecard">
          <img src={image} className="homelogo mb-1" alt="logo" />
          <span variant="dark">{title}</span>
        </div>
      </a>
    </>
  );
};

export default CategoryCardComponent;
