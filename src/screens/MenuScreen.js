import React from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import restaurant from "../images/menu/restaurant1.png";
import home from "../images/menu/home.jpg";

const MenuScreen = () => {
  return (
    <div className=" text-center">
      <Header />
      <Row className="row p-2 text-center">
        <div className="my-auto mx-auto">
          <a href="http://mydhamtarirestaurantmenu.herokuapp.com/">
            <Col sm={12} md={6} lg={6} xl={6}>
              <img
                src={restaurant}
                height="180"
                width="280"
                alt=""
                className="my-4"
              />
            </Col>
          </a>
          <div
            style={{
              borderTop: "2px solid #000 ",
            }}
          ></div>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a href="http://mydhamtarihomemenu.herokuapp.com/">
              <img
                src={home}
                height="250"
                width="250"
                alt=""
                className="my-3 homemenulogo"
              />
            </a>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default MenuScreen;
