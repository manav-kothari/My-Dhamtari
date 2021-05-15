import React from "react";
import { Footer, InfoSection, Navbar, Pricing } from "../../components";
import { homeObjTwo } from "./Data";

function PricingScreen() {
  return (
    <>
      <Navbar />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default PricingScreen;
