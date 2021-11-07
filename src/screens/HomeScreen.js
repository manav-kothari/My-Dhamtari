import React from "react";
import { Navbar } from "react-bootstrap";

import logo from "../images/playstore.png";
import background from "../images/background.jpg";
import contact from "../images/home/contact.png";
import places from "../images/home/places3.png";
import news from "../images/home/news2.png";
import events from "../images/home/events.png";
import menu from "../images/home/menu3.png";
import shops from "../images/home/shops.png";
import weather from "../images/home/weather.png";
import cinema from "../images/home/cinema.png";
// import gallery from "../images/home/images.png";
import CategoryCardComponent from "../components/CategoryCardComponent";
// import navratri from "../images/navratri2021/navratriicon.png";

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
          className=" text-capitalize font-weight-bold logo"
        >
          <span className="headerheading">My Dhamtari</span>
        </Navbar.Brand>
        <div className="ml-auto mobileplaystore">
          <a href="https://play.google.com/store/apps/details?id=com.mydhamtari">
            <img
              src={logo}
              width="130"
              height="40"
              className="d-inline-block align-to "
              alt="logo"
            />
          </a>
        </div>
      </Navbar>
      <div className="text-white bg-dark text-center">
        We have some exciting updates coming soon!!!
        <br />
        Stay tuned for more...
      </div>
      <div
        className="homecard-columns"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <CategoryCardComponent
          image={navratri}
          title="Navratri"
          link="/navratri2021"
          status2="New!!!"
        /> */}
        <CategoryCardComponent
          image={contact}
          title="Contact"
          link="/contact"
        />
        <CategoryCardComponent image={news} title="Newspaper" link="/news" />
        <CategoryCardComponent image={events} title="Events" link="/events" />
        <CategoryCardComponent image={places} title="Places" link="/places" />

        <CategoryCardComponent image={menu} title="Food Menu" link="/menu" />

        <CategoryCardComponent
          image={shops}
          title="Shops"
          link="/shops"
          status="New!!!"
        />

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

        {/* <CategoryCardComponent
          image={gallery}
          title="Gallery"
          link="/gallery"
        /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
