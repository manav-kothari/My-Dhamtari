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
import generatorsonhire from "../../images/contact/generatorsonhire.svg";
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

const ContactScreen = () => {
  return (
    <>
      <div className="p-0 m-0">
        <Header />

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

        <ContactCardComponent title="Automobile" Img={automobile} link="/" />

        <ContactCardComponent
          title="Builder & Contractor"
          Img={builder}
          link="/"
        />

        <ContactCardComponent title="Caterers" Img={caterers} link="/" />

        <ContactCardComponent
          title="Chartered Accountants"
          Img={account}
          link="/"
        />
        <ContactCardComponent
          title="Civil Enginners"
          Img={civilengineer}
          link="/"
        />

        <ContactCardComponent
          title="Computer Repairs"
          Img={computerrepairs}
          link="/"
        />

        <ContactCardComponent
          title="Computer training"
          Img={computertraining}
          link="/"
        />

        <ContactCardComponent
          title="Decorators"
          Img={decoration}
          link="/contact/decoration"
        />

        <ContactCardComponent title="Education" Img={education} link="/" />

        <ContactCardComponent title="Fitness" Img={fitness} link="/" />
        <ContactCardComponent
          title="Flex Printing Services"
          Img={flexprintingservices}
          link="/"
        />
        <ContactCardComponent title="Flowers/Plants" Img={flower} link="/" />

        <ContactCardComponent title="Furniture" Img={furniture} link="/" />
        <ContactCardComponent
          title="Generator"
          Img={generatorsonhire}
          link="/"
        />
        <ContactCardComponent
          title="Graphic Designers"
          Img={graphicdesigners}
          link="/"
        />
        <ContactCardComponent
          title="House Keeping"
          Img={housekeeping}
          link="/"
        />

        <ContactCardComponent
          title="Interior Designers"
          Img={interiordesigners}
          link="/"
        />
        <ContactCardComponent
          title="Ticketing Agents"
          Img={ticketingagents}
          link="/"
        />
        <ContactCardComponent title="Logistics" Img={logistics} link="/" />
        <ContactCardComponent title="Medicines" Img={medicines} link="/" />
        <ContactCardComponent
          title="Painting Contractors"
          Img={paintingcontractors}
          link="/"
        />
        <ContactCardComponent
          title="Pathology Labs"
          Img={pathologylabs}
          link="/"
        />
        <ContactCardComponent
          title="Personal Care"
          Img={personalcare}
          link="/"
        />
        <ContactCardComponent
          title="Photographers"
          Img={photographers}
          link="/"
        />
        <ContactCardComponent
          title="Physiotherapists"
          Img={physiotherapists}
          link="/"
        />

        <ContactCardComponent title="Real Estate" Img={realestate} link="/" />
        <ContactCardComponent title="Repairing" Img={repair} link="/" />

        <ContactCardComponent
          title="Tattoo Artists"
          Img={tattooartists}
          link="/"
        />
        <ContactCardComponent
          title="Towing Services"
          Img={towingservices}
          link="/"
        />
        <ContactCardComponent title="Travel" Img={travel} link="/" />
        <ContactCardComponent
          title="Water & Ice"
          Img={water}
          link="/contact/waterandice"
        />
        <ContactCardComponent title="Wall Papers" Img={wallpapers} link="/" />
        <ContactCardComponent
          title="Wedding Requisites"
          Img={wedding}
          link="/"
        />
        <ContactCardComponent title="Yoga Classes" Img={yogaclasses} link="/" />
      </div>
    </>
  );
};

export default ContactScreen;
