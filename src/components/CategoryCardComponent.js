import React from "react";

const CategoryCardComponent = ({
  title,
  titledark,
  image,
  link,
  status,
  status2,
}) => {
  return (
    <>
      <a href={link}>
        <div class="homecard">
          <img src={image} className="homelogo mb-1" alt="logo" />
          <br />
          <span className="text-white">{title}</span>
          <br />
          <span className="text-dark">{titledark}</span>
          <span className="text-danger text-weight-bold bg-light blink_me">
            {status}
          </span>
          <span className="text-info text-weight-bold bg-light blink_me">
            {status2}
          </span>
        </div>
      </a>
    </>
  );
};

export default CategoryCardComponent;
