import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Navbar, Pricing, Footer } from "../../components";

function Home() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      <InfoSection {...homeObjTwo} />

      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
