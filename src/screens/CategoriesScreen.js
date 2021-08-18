import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import "../style.css";
import bakery from "../images/categories/bakery-accessories.jpg";
import clothes from "../images/categories/clothing.jpg";
import comingsoon from "../images/categories/coming-soon.jpg";
import electronic from "../images/categories/electronic-shop4.png";
import ShopFooter from "../components/ShopFooter";
import CategoryCardComponent from "../components/CategoryCardCoponent";

const CategoriesScreen = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <Row className="row p-2">
        <Col sm={12} md={6} lg={4} xl={4}>
          <CategoryCardComponent
            name="Clothing Shops"
            image={clothes}
            link="/shopcomingsoon"
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <CategoryCardComponent
            name="Electronic Shops"
            image={electronic}
            link="/shopcomingsoon"
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <CategoryCardComponent
            name="Bakery Accessories"
            image={bakery}
            link="/shopcomingsoon"
          />
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-1 rounded cards">
            <Card.Img
              className="card-img-top embed-responsive-item"
              variant="top"
              src={comingsoon}
            />

            <Card.Body className="card-body text-center">
              <Card.Title>
                <strong>More Shops Comming Soon...</strong>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ShopFooter></ShopFooter>
    </div>
  );
};
export default CategoriesScreen;
