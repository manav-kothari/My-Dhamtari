import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const WildllifeSanturyScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Sitanadi Wildlife Sanctuary"
              image="https://3.bp.blogspot.com/-V14NUzqchDo/VsDuzemFi4I/AAAAAAAABNM/_JPaXDiH6p0/s640/EChhattisgarh-Sitanadi_Wildlife_Sanctuary%2B%25284%2529.jpg"
              link="https://goo.gl/maps/Bdg1R8ib3Kn9EiB98"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WildllifeSanturyScreen;
