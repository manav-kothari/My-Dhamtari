import React from "react";
import ganesh from "../images/home/ganesh.png";
import CategoryCardComponent from "../components/CategoryCardComponent";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Header />
      <CategoryCardComponent
        image={ganesh}
        titledark="Ganesh Chaturthi Darshan"
        link="/ganeshchaturthi"
      />
    </div>
  );
};

export default Gallery;
