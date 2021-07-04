import React from "react";
import { Link } from "react-router-dom";

// import { Card } from "react-bootstrap";

const ContactCardComponent = ({ link = "", title = "Title", Img = "" }) => {
  return (
    <div>
      <Link to={link}>
        <div data-aos="fade-up mt-1" class="card1">
          <div class="card_image">
            <img aria-hidden src={Img} alt="catalog image" />
          </div>
          <div class="card_title title-white">
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContactCardComponent;
