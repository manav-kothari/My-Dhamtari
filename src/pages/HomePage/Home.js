import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Navbar, Pricing } from "../../components";

function Home() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      <InfoSection {...homeObjTwo} />

      <Pricing />
    </>
  );
}

export default Home;
