import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import PlacesCardCompnent from "./PlacesCardCompnent";

const WaterfallsScreen = () => {
  return (
    <>
      <Header />
      <div>
        <h3 className="text-center mx-1 mt-2 heading">
          Waterfalls in Dhamtari:
        </h3>
        <Row className="row p-2 text-center">
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
              image="https://lh5.googleusercontent.com/p/AF1QipM2M0L80RX96REGFL6sl00oBPykiw8F3sljAsVq=w408-h272-k-no"
              link="https://www.google.com/maps/place/Gahandar+waterfall/@20.5981444,81.7290575,12z/data=!4m9!1m2!2m1!1sghandar+waterfall!3m5!1s0x3a2f3d1558e52469:0xa712bed45e6163c3!8m2!3d20.5981576!4d81.7290377!15sChFnaGFuZGFyIHdhdGVyZmFsbFoTIhFnaGFuZGFyIHdhdGVyZmFsbJIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSVFgzRk1PRGgzUlJBQg"
            />
          </Col>
        </Row>
        <h3 className="text-center mx-1 mt-2 heading">
          Waterfalls Near Dhamtari:
        </h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Ghatarani Waterfall"
              image="https://media-cdn.tripadvisor.com/media/photo-s/08/4e/19/c4/jatmai-temple.jpg"
              link="https://goo.gl/maps/d9EhewcGZSY2UPLU8"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Siyadevi Waterfall"
              image="https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/028c36b8-b641-4c05-ab27-ef265820ca67_Siyadevi-Waterfall.jpg"
              link="https://goo.gl/maps/cwhH3THCNPRYx2ke7"
            />
          </Col>
          {/* <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Tirathgarh Waterfall"
              image="https://lh5.googleusercontent.com/p/AF1QipOxMD_NmL-QHFpSfcyB3KSJ_AX4uf7qpQNeWDCZ=w408-h272-k-no"
              link="https://goo.gl/maps/ZTsa24LkgQPRZqXz8"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Chitrakote Waterfalls"
              image="https://static2.tripoto.com/media/filter/tst/img/375186/TripDocument/1504495447_1406181496_waterfalls_to_visit_in_the_monsoon_part_i_cox_kings_blog.jpg"
              link="https://goo.gl/maps/xu1yHWPCbwwipYnQ7"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <PlacesCardCompnent
              title="Mendri Gumar Waterfall, Tamra Ghoomar Waterfall"
              image="https://upload.wikimedia.org/wikipedia/commons/c/cd/Mendri-Ghumar_Waterfalls_taken_on_27_Aug_2017.jpg"
              link="https://goo.gl/maps/EiDXq5ANKcT8y1io8"
            />
          </Col> */}
        </Row>
      </div>
    </>
  );
};

export default WaterfallsScreen;
