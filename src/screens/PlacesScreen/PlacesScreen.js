import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCategoryComponent from "./PlacesCategoryComponent";
import Parks from "../../images/places/Parks.jpg";
import Restaurants from "../../images/places/Restaurants.jpg";
import Dams from "../../images/places/Dams.jpg";
import Waterfalls from "../../images/places/Waterfalls.jpg";
import Nature from "../../images/places/Nature.jpg";
import Jungle from "../../images/places/jungle.jpg";
import Cultural from "../../images/places/cultural.jpg";
import Adventure from "../../images/places/Adventure.webp";
import WildlifeSanturies from "../../images/places/Wildlife Santuries.jpg";

const PlacesScreen = () => {
  return (
    <>
      <Header />
      <h2 className="text-center pt-1 heading">
        <strong>Explore Places:</strong>
        <h6>
          <small className="text-center">
            (will be adding more places and details soon.)
          </small>
        </h6>
      </h2>

      <Row className="row text-center">
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/restaurants"
            title="Restaurants/Cafe"
            Img={Restaurants}
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/parks"
            title="Parks"
            Img={Parks}
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/dams"
            title="Dams"
            Img={Dams}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/waterfalls"
            title="Waterfalls"
            Img={Waterfalls}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/nature"
            title="Nature Friendly"
            Img={Nature}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/adventure"
            title="Adventure"
            Img={Adventure}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent
            link="/places/wildlife"
            title="Wildlife Santuries"
            Img={WildlifeSanturies}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Jungle Safari & Zoo" Img={Jungle} />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Cultural" Img={Cultural} />
        </Col>
      </Row>
    </>
  );
};

export default PlacesScreen;
