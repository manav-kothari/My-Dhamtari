import React from "react";
import { InfoSection, Navbar, Pricing } from "../../components";
import { homeObjTwo } from "./Data";

function PricingScreen() {
  return (
    <>
      <Navbar />
      <Pricing />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default PricingScreen;
