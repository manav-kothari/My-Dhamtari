import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const WebDeveloperScreen = () => {
  return (
    <div>
      <Header />
      <div className="page">
        {" "}
        <h3 className="heading text-center pt-1 my-2">Web Developers:</h3>
        <Row className="row p-2 text-center">
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>Manav Kothari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Dhamtari, Chhattisgarh 493773
                </Card.Subtitle>
                <Card.Text>Phone : 7415519777</Card.Text>
                <Card.Link href="http://maacakemalai.herokuapp.com/">
                  <strong>E-commerce Website (My Work)</strong>
                </Card.Link>
                <Card.Text>
                  Fully dynamic website with payment gateway, order, admin and
                  user panel, etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WebDeveloperScreen;
