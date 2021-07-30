import React from "react";
import { InfoSection, Navbar } from "../../components";
import { homeObjFour, homeObjThree } from "./Data";

function Product() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Product;
