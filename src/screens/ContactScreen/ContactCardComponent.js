import React from "react";

const ContactCardComponent = ({ link = "", title = "Title", Img = "" }) => {
  return (
    <div>
      <a href={link}>
        <div className="column">
          <img src={Img} className="contact" alt={title} />
          <p className="contact_title">{title}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactCardComponent;
