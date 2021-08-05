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
import computershops from "../../images/contact/computershop.svg";
import computertraining from "../../images/contact/computertraining.svg";
import education from "../../images/contact/education.svg";
import fitness from "../../images/contact/fitness.svg";
import flexprintingservices from "../../images/contact/flexprintingservices.svg";
import furniture from "../../images/contact/furniture.svg";
import generatorsonhire from "../../images/contact/generatorsonhire.svg";
import housekeeping from "../../images/contact/housekeeping.svg";
import interiordesigners from "../../images/contact/interiordesigners.svg";
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
import mobile from "../../images/contact/mobile.svg";
import constructionmachinerysupplies from "../../images/contact/constructionmachinerysupplies.svg";
import job from "../../images/contact/job.svg";
import borewell from "../../images/contact/borewellcontractors.svg";
import caronhire from "../../images/contact/caronhire.svg";
import gas from "../../images/contact/gas.svg";
import courier from "../../images/contact/courierservices.svg";
import pet from "../../images/contact/petpetcare.svg";
import insurance from "../../images/contact/insurance.svg";
import webdeveloper from "../../images/contact/graphicdesigners.svg";
import civilengineer from "../../images/contact/architects.svg";
import dairy from "../../images/contact/milkproducts.svg";
import electricity from "../../images/contact/electricity.png";
import helpline from "../../images/contact/helpline.png";
import electronics from "../../images/contact/electronics.png";
import postoffice from "../../images/contact/postoffice.png";
import telephone from "../../images/contact/telephone.png";
import fire from "../../images/contact/fire.png";
import game from "../../images/contact/game.png";
import bloodbank from "../../images/contact/bloodbank.jpg";
import bhawan from "../../images/contact/bhawan.jpg";
import vastushastra from "../../images/contact/VastuShastra.png";
import icecream from "../../images/contact/icecream.jpg";
import stamp from "../../images/contact/stamp.jpg";
import police from "../../images/contact/police.v1.jpeg";
import { Navbar, Button } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <>
      <Header />

      <div className="page">
        <ContactCardComponent
          title="HelpLine"
          Img={helpline}
          link="/contact/helpline"
        />
        <ContactCardComponent
          title="Police"
          Img={police}
          link="/contact/police"
        />
        <ContactCardComponent
          title="Fire Brigade"
          Img={fire}
          link="/contact/firebrigade"
        />

        <ContactCardComponent
          title="Electricity"
          Img={electricity}
          link="/contact/electricity"
        />

        <ContactCardComponent
          title="Telephone Office"
          Img={telephone}
          link="/contact/telephone"
        />
        <ContactCardComponent
          title="Post Office"
          Img={postoffice}
          link="/contact/postoffice"
        />
        <ContactCardComponent
          title="Hospitals & Clincs"
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
          title="Architects"
          Img={civilengineer}
          link="/contact/civilengineer"
        />
        <ContactCardComponent
          title="Automobile"
          Img={automobile}
          link="/contact/automobile"
        />

        <ContactCardComponent
          title="Bhawans"
          Img={bhawan}
          link="/contact/bhawan"
        />

        <ContactCardComponent
          title="Borewell Contractors"
          Img={borewell}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Builder & Contractor"
          Img={builder}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Blood Bank"
          Img={bloodbank}
          link="/contact/bloodbank"
        />

        <ContactCardComponent
          title="Car On Hire"
          Img={caronhire}
          link="/contact/caronhire"
        />

        <ContactCardComponent
          title="Caterers"
          Img={caterers}
          link="/contact/caterer"
        />

        <ContactCardComponent
          title="Chartered Accountants"
          Img={account}
          link="/contact/accounting"
        />

        <ContactCardComponent
          title="Computer Repair"
          Img={computerrepairs}
          link="/contact/computerrepair"
        />

        <ContactCardComponent
          title="Computer Shops"
          Img={computershops}
          link="/contact/computershops"
        />

        <ContactCardComponent
          title="Computer Training"
          Img={computertraining}
          link="/contact/computertraining"
        />
        <ContactCardComponent
          title="Construction"
          Img={constructionmachinerysupplies}
          link="/contact/comingsoon"
        />

        <ContactCardComponent
          title="Courier"
          Img={courier}
          link="/contact/comingsoon"
        />

        <ContactCardComponent title="Dairy" Img={dairy} link="/contact/dairy" />

        <ContactCardComponent
          title="Decorators"
          Img={decoration}
          link="/contact/decoration"
        />

        <ContactCardComponent
          title="Education"
          Img={education}
          link="/contact/education"
        />

        <ContactCardComponent
          title="Electronics Shops"
          Img={electronics}
          link="/contact/electronicshops"
        />

        <ContactCardComponent
          title="Fitness"
          Img={fitness}
          link="/contact/fitness"
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
          link="/contact/furniture"
        />
        <ContactCardComponent
          title="Gaming"
          Img={game}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Generator"
          Img={generatorsonhire}
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
          title="Jobs Available"
          Img={job}
          link="/contact/comingsoon"
        />

        <ContactCardComponent title="Gas" Img={gas} link="/contact/gas" />

        <ContactCardComponent
          title="Ice Cream Shops"
          Img={icecream}
          link="/contact/icecream"
        />
        <ContactCardComponent
          title="Insurance"
          Img={insurance}
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
          link="/contact/medicine"
        />
        <ContactCardComponent
          title="Mobile Shops"
          Img={mobile}
          link="/contact/mobileshops"
        />

        <ContactCardComponent
          title="Painting Contractors"
          Img={paintingcontractors}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Pathology Labs"
          Img={pathologylabs}
          link="/contact/pathology"
        />
        <ContactCardComponent
          title="Personal Care"
          Img={personalcare}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Pet"
          Img={pet}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Photographer"
          Img={photographers}
          link="/contact/photographers"
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
          title="Stamp Works"
          Img={stamp}
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
          link="/contact/travel"
        />
        <ContactCardComponent
          title="Vastu Shastra"
          Img={vastushastra}
          link="/contact/vastushastra"
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
          title="Web Developer"
          Img={webdeveloper}
          link="/contact/webdev"
        />
        <ContactCardComponent
          title="Wedding Requisites"
          Img={wedding}
          link="/contact/comingsoon"
        />
        <ContactCardComponent
          title="Yoga Classes"
          Img={yogaclasses}
          link="/contact/yoga"
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
