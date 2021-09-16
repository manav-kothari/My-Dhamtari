import React from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import restaurant from "../images/menu/restaurant.png";
import home from "../images/menu/home.png";

const MenuScreen = () => {
  return (
    <div className="page2 text-center">
      <Header />
      <Row className="row p-2 text-center">
        <div className="my-auto mx-auto">
          <a href="http://mydhamtarirestaurantmenu.herokuapp.com/">
            <Col sm={12} md={6} lg={6} xl={6}>
              <img src={restaurant} height="280" width="280" alt="" />
            </Col>
          </a>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a href="http://mydhamtarihomemenu.herokuapp.com/">
              <img
                src={home}
                height="180"
                width="180"
                alt=""
                className="mt-4 homemenulogo"
              />
            </a>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default MenuScreen;
