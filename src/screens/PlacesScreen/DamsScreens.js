import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const DamsScreens = () => {
  return (
    <div>
      <Header />

      <Row className="row text-center">
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Gangrel Dam"
            image="https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/bfi_thumb/2018052855-olwbsunfoo7chjgzwk8qg6z52semkoskzltzohc22y.jpg"
            link="https://goo.gl/maps/V8NAXnKZ4DVDC9hH6"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Rudri Dam"
            image="https://pbs.twimg.com/media/DVbDHENXkAEbW1X.jpg"
            link="https://goo.gl/maps/zuc1u8sUPpb9QcuT8"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Murumsilli Dam"
            image="https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/bfi_thumb/2018050215-olwbu4pizjyeafm3fm5gcdcq6o3m1uvfhxss71frm2.jpg"
            link="https://www.google.com/maps/place/Murumsilli+dam/@20.541179,81.6649182,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f22ebe1a447c5:0x6be38537d6a679dc!8m2!3d20.541179!4d81.6649182"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Sondhur Dam"
            image="https://i.ytimg.com/vi/2xfDZsB-SIo/maxresdefault.jpg"
            link="https://www.google.com/maps/place/Sondhur+Dam/@20.2289265,82.102266,17z/data=!4m5!3m4!1s0x3a2f794e3933824b:0x5dc52bbe065abe2!8m2!3d20.2289265!4d82.1044547"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Dudhawa Dam"
            image="https://media-cdn.tripadvisor.com/media/photo-s/15/af/84/a7/very-beautiful-place.jpg"
            link="https://www.google.com/maps/place/Dudhawa+Dam,+Kormud,+Chhattisgarh+493778/@20.307778,81.771667,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f0e0c4323b0f9:0xd7d5dd1dc7ce396d!8m2!3d20.307778!4d81.771667"
          />
        </Col>
      </Row>
    </div>
  );
};

export default DamsScreens;
