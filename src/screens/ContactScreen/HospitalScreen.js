import React from "react";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import Header from "../../components/Header";

const HospitalScreen = () => {
  return (
    <div>
      <Header />
      <h2 className="heading text-center pt-1 my-2">Hospitals:</h2>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <Card.Title>District Hospital Dhamtari</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Ratna Bhandha Rd, Subhash Nagar, Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 07722237779</Card.Text>
              <Card.Link href="https://www.google.com/maps/place/District+Hospital/@20.7079953,81.5396583,17z/data=!4m9!1m2!2m1!1sDistrict+Hospital+Dhamtari,%0D%0A(First+e-hospital+of+State+Chhattisgarh),%0D%0ADistt.+Dhamtari+,(C.G.)%0D%0APIN+493773!3m5!1s0x3a2f296b8560297b:0x1408a027483c3117!8m2!3d20.7078592!4d81.5395949!15sCmtEaXN0cmljdCBIb3NwaXRhbCBEaGFtdGFyaSwNCihGaXJzdCBlLWhvc3BpdGFsIG9mIFN0YXRlIENoaGF0dGlzZ2FyaCksDQpEaXN0dC4gRGhhbXRhcmkgLChDLkcuKQ0KUElOIDQ5Mzc3M5IBCGhvc3BpdGFs">
                <strong>Directions</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Dhamtari Christian Hospital</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Raipur Road, Dhamtari, Chhattisgarh 493773
              </Card.Subtitle>
              <Card.Text>Phone : 07722240362</Card.Text>
              <Card.Link href="https://www.google.com/maps/place/Dhamtari+Christian+Hospital/@20.7181515,81.5491769,17.34z/data=!4m5!3m4!1s0x3a2f28677f328e51:0xed115337b03d0edc!8m2!3d20.718751!4d81.551536">
                <strong>Directions</strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="aler alert-info text-center blink_me p-3 my-5 h4 text-dark">
        More Hospitals details will be listed soon...
      </div>
      <Navbar
        bg="dark"
        variant="dark"
        className="text-center text-white footer"
        position="bottom"
      >
        <span className=" mx-auto">
          If you want to list contact information of Hospital/Doctor than{" "}
          <Button
            href="//api.whatsapp.com/send?phone=917415519777"
            variant="info"
            className=" text-capitalize btn"
          >
            Contact Us
          </Button>
        </span>
      </Navbar>
    </div>
  );
};

export default HospitalScreen;
