import React from "react";
import Header from "../../components/Header";
import ContactCardComponent from "./ContactCardComponent";
import repair from "../../images/contact/repair.jpg";
import doctor from "../../images/contact/hospital.jpg";
import restaurant from "../../images/contact/restaurant.jpg";
import personalcare from "../../images/contact/personalcare.jpg";
import travel from "../../images/contact/travel.jpg";
import automobile from "../../images/contact/automobile.jpg";
import flower from "../../images/contact/flower.jpg";
import wedding from "../../images/contact/wedding.jpg";

const ContactScreen = () => {
  return (
    <div className="p-0 m-0">
      <Header />
      <h1 className="heading text-center my-2">
        <strong> Contact:</strong>
      </h1>
      <ContactCardComponent title="Repairing Services" Img={repair} />
      <ContactCardComponent title="Doctors/Hospitals" Img={doctor} />
      <ContactCardComponent title="Restaurants" Img={restaurant} />
      <ContactCardComponent title="Personal Care Services" Img={personalcare} />
      <ContactCardComponent title="Travel Services" Img={travel} />
      <ContactCardComponent title="Automobiles Services" Img={automobile} />
      <ContactCardComponent title="Flowers/Plants Seller" Img={flower} />
      <ContactCardComponent title="Wedding Services" Img={wedding} />
    </div>
  );
};

export default ContactScreen;
