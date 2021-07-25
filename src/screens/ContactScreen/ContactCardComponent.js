import React from "react";
import { Link } from "react-router-dom";

// import { Card } from "react-bootstrap";

const ContactCardComponent = ({ link = "", title = "Title", Img = "" }) => {
  return (
    <div>
      <Link to={link}>
        <div className="column">
          <img src={Img} className="contact" alt={title} />
          <p className="contact_title">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContactCardComponent;
