import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const HotelScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-2">Hotels & Resorts:</h3>
      <div className="page">
        {" "}
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Maharana Pratap marriage garden and resort
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Vivekanand Colony, Street no. 3, Dhamtari, Chhattisgarh 493773
                </Card.Subtitle>
                <Card.Text>Phone : 8770011589</Card.Text>

                <Card.Link href="https://goo.gl/maps/MWCKLr1KN7UnTzteA">
                  <strong>Directions</strong>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/mahrana_pratap_resort_dmt">
                  <strong>Instagram</strong>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
          More Hotels details will be listed soon...
        </div>
      </div>
    </div>
  );
};

export default HotelScreen;
