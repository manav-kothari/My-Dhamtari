import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";
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
            title="Narhara Waterfall"
            image="https://content.jdmagicbox.com/comp/dhamtari/x2/9999p7722.7722.190826203741.s5x2/catalogue/narhara-waterfall-dhamtari-yttngu2o8v.jpg?clr=#422e24?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A"
            link="https://www.google.com/maps/place/Narhara+Waterfall/@20.6000762,81.7840634,17z/data=!3m1!4b1!4m5!3m4!1s0x3a2f3ea60058b4af:0x49b277112973f6af!8m2!3d20.6000762!4d81.7840634"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PlacesCardCompnent
            title="Gahandar Waterfall"
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
