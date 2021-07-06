import React from "react";
import Header from "../../components/Header";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./ShopScreenElements";

const ShopScreen = () => {
  return (
    <>
      <Header />
      <HeroContainer>
        <HeroContent>
          <HeroItems>
            <HeroH1>My Dhamtari Shops</HeroH1>
            <HeroP className="text-center">
              Pre-register and get your own website & showcase your products
              online for Free*
            </HeroP>
            <HeroBtn target="_blank" to="/aboutshop">
              Read More
            </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <div
        style={{ backgroundColor: "#000" }}
        className="text-center text-light m-0 p-0"
      >
        <small>*Limited Hosting & 512MB Storage, etc. </small>
      </div>
    </>
  );
};

export default ShopScreen;
