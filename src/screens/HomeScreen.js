import React from "react";
import { Navbar } from "react-bootstrap";

// import logo from "../images/logo.png";
import background from "../images/background.jpg";
import contact from "../images/home/contact.png";
import places from "../images/home/places3.png";
import news from "../images/home/news2.png";
import events from "../images/home/events.png";
import menu from "../images/home/menu3.png";
import shops from "../images/home/shops.png";
import weather from "../images/home/weather.png";
import cinema from "../images/home/cinema.png";
import ganesh from "../images/home/ganesh.png";
import gallery from "../images/home/images.png";
import CategoryCardComponent from "../components/CategoryCardComponent";

const HomeScreen = () => {
  return (
    <div className="">
      <Navbar
        variant="dark"
        sticky="top"
        className="p-2"
        style={{ background: "#000" }}
      >
        <Navbar.Brand
          href="/"
          className="mx-auto text-capitalize font-weight-bold "
        >
          {/* <img
            src={logo}
            width="37"
            height="35"
            className="d-inline-block align-to mx-2"
            alt="logo"
          />{" "} */}
          <span className="headerheading">My Dhamtari</span>
        </Navbar.Brand>
      </Navbar>
      <div
        className="homecard-columns"
        style={{ backgroundImage: `url(${background})` }}
      >
        <CategoryCardComponent
          image={ganesh}
          title="Ganesh Chaturthi Darshan"
          link="/ganeshchaturthi"
        />
        <CategoryCardComponent
          image={contact}
          title="Contact"
          link="/contact"
        />
        <CategoryCardComponent image={places} title="Places" link="/places" />
        <CategoryCardComponent image={news} title="Newspaper" link="/news" />
        <CategoryCardComponent image={events} title="Events" link="/events" />
        <CategoryCardComponent image={menu} title="Food Menu" link="/menu" />

        <CategoryCardComponent image={shops} title="Shops" link="/shops" />

        <CategoryCardComponent
          image={weather}
          title="Weather"
          link="/weather"
        />
        <CategoryCardComponent
          image={cinema}
          title="Theater Shows (bookmyshow)"
          link="https://in.bookmyshow.com/dhamtari/venue-list"
        />

        <CategoryCardComponent
          image={gallery}
          title="Gallery"
          link="/gallery"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
