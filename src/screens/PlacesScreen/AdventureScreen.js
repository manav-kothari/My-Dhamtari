import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const AdventureScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Mini Goa (Gangrel)"
              image="https://new-img.patrika.com/upload/2018/09/27/dmt__3478592_835x547-m.jpg"
              link="https://goo.gl/maps/yVTPQenUcZzAeRD66"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdventureScreen;
