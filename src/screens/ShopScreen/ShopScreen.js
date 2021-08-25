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
              Pre-register and get your own website and showcase your products
              online. Contact us now and get started for FREE{" "}
            </HeroP>
            <HeroBtn target="_blank" to="/aboutshop">
              Read More
            </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default ShopScreen;
