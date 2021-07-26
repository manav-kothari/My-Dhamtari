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
            title="Wildlife Santuries"
            Img={WildlifeSanturies}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Nature Friendly" Img={Nature} />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Adventure" Img={Adventure} />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Jungle Safari & Zoo" Img={Jungle} />
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <PlacesCategoryComponent title="Cultural" Img={Cultural} />
        </Col>

        {/* 
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
        
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Sitanadi Wildlife Sanctuary"
            image="https://3.bp.blogspot.com/-V14NUzqchDo/VsDuzemFi4I/AAAAAAAABNM/_JPaXDiH6p0/s640/EChhattisgarh-Sitanadi_Wildlife_Sanctuary%2B%25284%2529.jpg"
            link="https://goo.gl/maps/Bdg1R8ib3Kn9EiB98"
          />
        </Col> */}
      </Row>
    </>
  );
};

export default PlacesScreen;
