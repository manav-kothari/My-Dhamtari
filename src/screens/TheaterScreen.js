import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const TheaterScreen = () => {
  return (
    <div>
      <Header />
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <a href="https://in.bookmyshow.com/dhamtari/cinemas/amar-talkies-dhamtari/ATDI">
            <Card className="my-2 p-1 rounded cards">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src="https://in.top10place.com/img_files/109692532518806"
              />
              <Card.Body className="card-body text-center">
                <Card.Title>
                  <strong className="text-dark">Amar Talkies</strong>
                </Card.Title>
                <Button
                  style={{ backgroundColor: "#000" }}
                  variant="dark btn-block"
                >
                  See Shows
                </Button>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <a href="https://in.bookmyshow.com/dhamtari/cinemas/devshri-cinema-dhamtari/DVCA">
            <Card className="my-2 p-1 rounded cards">
              <Card.Body className="card-body text-center">
                <Card.Title>
                  <strong className="text-dark">Devshri Talkies</strong>
                </Card.Title>
                <Button
                  style={{ backgroundColor: "#000" }}
                  variant="dark btn-block"
                >
                  See Shows
                </Button>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <a href="https://in.bookmyshow.com/dhamtari/cinemas/eos-cinemas-dhamtari/EOSD">
            <Card className="my-2 p-1 rounded cards">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src="https://lh5.googleusercontent.com/p/AF1QipNTGdMJ8R_clUMDK2IUiSpP-OZnOtRa9kR1At_S=w1080-k-no"
              />
              <Card.Body className="card-body text-center">
                <Card.Title>
                  <strong className="text-dark">EOS Prashant</strong>
                </Card.Title>
                <Button
                  style={{ backgroundColor: "#000" }}
                  variant="dark btn-block"
                >
                  See Shows
                </Button>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <a href="https://in.bookmyshow.com/dhamtari/cinemas/vimal-cineplex-dhamtari/VCDT">
            <Card className="my-2 p-1 rounded cards">
              <Card.Img
                className="card-img-top embed-responsive-item"
                variant="top"
                src="https://content.jdmagicbox.com/comp/dhamtari/n1/9999p7722.7722.171229220058.n3n1/catalogue/vimal-cineplex-dhamtari-dhamtari-kd99qpomvs.jpg?clr=253341"
              />
              <Card.Body className="card-body text-center">
                <Card.Title>
                  <strong className="text-dark">Vimal Cineplex</strong>
                </Card.Title>
                <Button
                  style={{ backgroundColor: "#000" }}
                  variant="dark btn-block"
                >
                  See Shows
                </Button>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default TheaterScreen;
