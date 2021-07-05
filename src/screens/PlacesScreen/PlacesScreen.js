import React from "react";
import { Col, Row, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const PlacesScreen = () => {
  return (
    <>
      <Header />
      <h2 className="text-center p-1 heading">
        <strong>Tourist Places:</strong>
      </h2>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Mini Goa - Gangrel"
            image="https://new-img.patrika.com/upload/2018/09/27/dmt__3478592_835x547-m.jpg"
            link="https://www.google.com/maps/place/Mini+goa/@20.6166782,81.5644312,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f2772c3317017:0x17a0e613c664fb66!8m2!3d20.6166782!4d81.5644312"
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
            title="Onakona"
            image="https://lh3.googleusercontent.com/2cfjpwNdSBzUsL7v8UqGnJ0mH7tY0EB2vlRfBjswJRx4ZWgJAqzN7uZYtf3R0IE0VkJoLIRX5UxP8v6lDoE-QbITkvNEBzn7ECNZacKKj_rAIf6ovBHrzqu-EOxIGuPjBGzJcAKnCLU"
            link="https://www.google.com/maps/place/Onakona,+Chhattisgarh/@20.5776541,81.4169054,14z/data=!3m1!4b1!4m5!3m4!1s0x3a2edea4095f09cd:0x686d54416f383621!8m2!3d20.5806789!4d81.4416324"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Narhara Waterfall"
            image="https://content.jdmagicbox.com/comp/dhamtari/x2/9999p7722.7722.190826203741.s5x2/catalogue/narhara-waterfall-dhamtari-yttngu2o8v.jpg?clr=#422e24?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A"
            link="https://www.google.com/maps/place/Narhara+Waterfall/@20.6000762,81.7840634,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f3ea60058b4af:0x49b277112973f6af!8m2!3d20.6000762!4d81.7840634"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Gahandar waterfall"
            image="https://indiasthan.cdnpro.in/states/cg/narayanpur/tourist_place/kuyemari-waterfall-229293.jpg"
            link="https://www.google.com/maps/place/Gahandar+waterfall/@20.5981444,81.7290575,12z/data=!4m9!1m2!2m1!1sghandar+waterfall!3m5!1s0x3a2f3d1558e52469:0xa712bed45e6163c3!8m2!3d20.5981576!4d81.7290377!15sChFnaGFuZGFyIHdhdGVyZmFsbFoTIhFnaGFuZGFyIHdhdGVyZmFsbJIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSVFgzRk1PRGgzUlJBQg"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Shringirishi Parwat"
            image="https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/bfi_thumb/2020030739-scaled-e1583580530819-om7tcqpbfslq95zb2xni6abbi3w17aopvtlchmwtca.jpg"
            link="https://www.google.com/maps/place/Shringirishi+Parwat/@20.3128755,81.906724,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2f7267327cb67d:0x3e9dec12fc29ea2!8m2!3d20.3128955!4d81.9154656"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Sondhur Dam"
            image="https://upload.wikimedia.org/wikipedia/commons/7/72/Sondur_dam.jpg"
            link="https://www.google.com/maps/place/Sondhur+Dam/@20.2289265,82.102266,17z/data=!4m5!3m4!1s0x3a2f794e3933824b:0x5dc52bbe065abe2!8m2!3d20.2289265!4d82.1044547"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Dudhawa Dam"
            image="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/af/84/b2/very-beautiful-place.jpg"
            link="https://www.google.com/maps/place/Dudhawa+Dam,+Kormud,+Chhattisgarh+493778/@20.307778,81.771667,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f0e0c4323b0f9:0xd7d5dd1dc7ce396d!8m2!3d20.307778!4d81.771667"
          />
        </Col>
      </Row>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white"
        sticky="bottom"
      >
        <span className=" mx-auto">
          If you want to suggest more places than{" "}
          <Button
            href="//api.whatsapp.com/send?phone=917415519777"
            variant="info"
            className=" text-capitalize btn"
          >
            Contact Us
          </Button>
        </span>
      </Navbar>
    </>
  );
};

export default PlacesScreen;
