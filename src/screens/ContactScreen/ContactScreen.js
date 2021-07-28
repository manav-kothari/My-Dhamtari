import React from "react";
import Header from "../../components/Header";
import ContactCardComponent from "./ContactCardComponent";
import repair from "../../images/contact/repair.svg";
import doctor from "../../images/contact/doctor.svg";
import restaurant from "../../images/contact/restaurants.svg";
import personalcare from "../../images/contact/beauty.svg";
import travel from "../../images/contact/travel.svg";
import automobile from "../../images/contact/automobile.svg";
import flower from "../../images/contact/flower.svg";
import wedding from "../../images/contact/weddingrequisites.svg";
import account from "../../images/contact/accountants.svg";
import water from "../../images/contact/water.svg";
import hotel from "../../images/contact/hotels.svg";
import decoration from "../../images/contact/decorator.svg";
import builder from "../../images/contact/builderscontractors.svg";
import caterers from "../../images/contact/caterers.svg";
import computerrepairs from "../../images/contact/computerrepairs.svg";
import computertraining from "../../images/contact/computertraining.svg";
import education from "../../images/contact/education.svg";
import fitness from "../../images/contact/fitness.svg";
import flexprintingservices from "../../images/contact/flexprintingservices.svg";
import furniture from "../../images/contact/furniture.svg";
// import generatorsonhire from "../../images/contact/generatorsonhire.svg";
import housekeeping from "../../images/contact/housekeeping.svg";
import interiordesigners from "../../images/contact/interiordesigners.svg";
import ticketingagents from "../../images/contact/ticketingagents.svg";
import logistics from "../../images/contact/logistics.svg";
import medicines from "../../images/contact/medicines.svg";
import paintingcontractors from "../../images/contact/paintingcontractors.svg";
import pathologylabs from "../../images/contact/pathologylabs.svg";
import photographers from "../../images/contact/photographers.svg";
import physiotherapists from "../../images/contact/physiotherapists.svg";
import realestate from "../../images/contact/realestate.svg";
import tattooartists from "../../images/contact/tattooartists.svg";
import towingservices from "../../images/contact/towingservices.svg";
import wallpapers from "../../images/contact/wallpapers.svg";
import yogaclasses from "../../images/contact/yogaclasses.svg";
import graphicdesigners from "../../images/contact/graphicdesigners.svg";
import civilengineer from "../../images/contact/civilengineer.svg";
import { Navbar, Button } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <>
      <Header />

      <div className="page">
        <ContactCardComponent
          title="Medical"
          Img={doctor}
          link="/contact/hospitals"
        />
        <ContactCardComponent
          title="Restaurants"
          Img={restaurant}
          link="/contact/restaurant"
        />

        <ContactCardComponent
          title="Hotels"
          Img={hotel}
          link="/contact/hotel"
        />

        <ContactCardComponent
          title="Automobile"
          Img={automobile}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Builder & Contractor"
          Img={builder}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Caterers"
          Img={caterers}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Chartered Accountants"
          Img={account}
          link="/contact/accounting"
        />
        <ContactCardComponent
          title="Civil Engineers"
          Img={civilengineer}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Computer Repairs"
          Img={computerrepairs}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Computer training"
          Img={computertraining}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Decorators"
          Img={decoration}
          link="/contact/decoration"
        />

        <ContactCardComponent
          title="Education"
          Img={education}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Fitness"
          Img={fitness}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Flex Printing Services"
          Img={flexprintingservices}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Flowers/Plants"
          Img={flower}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Furniture"
          Img={furniture}
          link="/contact/comingsoon"
        />
        {/* <ContactCardComponent
          title="Generator"
          Img={generatorsonhire}
          link="/contact/comingsoon"
        /> */}
        <ContactCardComponent
          title="Graphic Designers"
          Img={graphicdesigners}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="House Keeping"
          Img={housekeeping}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Interior Designers"
          Img={interiordesigners}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Ticketing Agents"
          Img={ticketingagents}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Logistics"
          Img={logistics}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Medicines"
          Img={medicines}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Painting Contractors"
          Img={paintingcontractors}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Pathology Labs"
          Img={pathologylabs}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Personal Care"
          Img={personalcare}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Photographers"
          Img={photographers}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Physio Therapists"
          Img={physiotherapists}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Real Estate"
          Img={realestate}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Repairing"
          Img={repair}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Tattoo Artists"
          Img={tattooartists}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Towing Services"
          Img={towingservices}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Travel"
          Img={travel}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Water & Ice"
          Img={water}
          link="/contact/waterandice"
        />
        <ContactCardComponent
          title="Wall Papers"
          Img={wallpapers}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Wedding Requisites"
          Img={wedding}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Yoga Classes"
          Img={yogaclasses}
          link="/contact/comingsoon"
        />
      </div>
      {/* <small style={{ visibility: "hidden" }}>.</small> */}
      <Navbar className=" text-center text-dark mx-auto pt-4">
        <span className="mx-auto">
          If you want to list any contact detail here for FREE then{" "}
          <Button
            variant="info"
            href="//api.whatsapp.com/send?phone=917415519777"
            className=" text-capitalize btn my-1"
          >
            Contact Us
          </Button>
          <br />
        </span>
      </Navbar>
    </>
  );
};

export default ContactScreen;
