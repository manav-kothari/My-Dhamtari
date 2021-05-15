import React from "react";
import { Footer, InfoSection, Navbar } from "../../components";
import { homeObjFour, homeObjThree } from "./Data";

function Product() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Product;
