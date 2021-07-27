import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const NatureFriendlyScreens = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Onakona"
              image="https://lh3.googleusercontent.com/2cfjpwNdSBzUsL7v8UqGnJ0mH7tY0EB2vlRfBjswJRx4ZWgJAqzN7uZYtf3R0IE0VkJoLIRX5UxP8v6lDoE-QbITkvNEBzn7ECNZacKKj_rAIf6ovBHrzqu-EOxIGuPjBGzJcAKnCLU"
              link="https://www.google.com/maps/place/Onakona,+Chhattisgarh/@20.5776541,81.4169054,14z/data=!3m1!4b1!4m5!3m4!1s0x3a2edea4095f09cd:0x686d54416f383621!8m2!3d20.5806789!4d81.4416324"
            />
          </Col>

          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Shringirishi Parwat"
              image="https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/bfi_thumb/2020030739-scaled-e1583580530819-om7tcqpbfslq95zb2xni6abbi3w17aopvtlchmwtca.jpg"
              link="https://www.google.com/maps/place/Shringirishi+Parwat/@20.3128755,81.906724,15z/data=!3m1!4b1!4m5!3m4!1s0x3a2f7267327cb67d:0x3e9dec12fc29ea2!8m2!3d20.3128955!4d81.9154656"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NatureFriendlyScreens;
