import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import patrika from "../../images/news/patrika.PNG";
import prakharsamachar from "../../images/news/prakharsamachar.jpeg";
import naidunia from "../../images/news/naidunia-logo.png";
import nb from "../../images/news/navbharat.jpg";
import haribhoomi from "../../images/news/haribhoomi.jpg";

import NewsCardComponent from "../../components/NewsCardComponent";
import { NewsContainer } from "./NewsScreenElements";

const NewsScreen = () => {
  return (
    <NewsContainer>
      <Header />

      <h1 className="text-center text-light p-1">Local E-Paper</h1>
      <Row className="row p-2 text-center">
        <Col sm={12} md={6} lg={6} xl={12}>
          <NewsCardComponent
            name="Dhamtari Bhoomi"
            image={haribhoomi}
            link="https://www.haribhoomi.com/epaper/raipur-dhamtari-bhumi"
          />
        </Col>

        <Col sm={12} md={6} lg={6} xl={12}>
          <NewsCardComponent
            name="Navbharat"
            image={nb}
            link="https://epaper.navabharat.news/category/16/dhamtari"
          />
        </Col>

        <Col sm={12} md={6} lg={6} xl={12}>
          <NewsCardComponent
            name="Naidunia"
            image={naidunia}
            link="https://epaper.naidunia.com/mepaper/edition-today-dhamtari-44.html"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={12}>
          <NewsCardComponent
            name="Patrika"
            image={patrika}
            link="https://epaper.patrika.com/chhattisgarh/dhamtari"
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={12}>
          <NewsCardComponent
            name={prakharsamachar}
            image="https://epaper.prakharsamachar.com/assets/images/prakhar_samachar_logo.jpeg"
            link="https://epaper.prakharsamachar.com/"
          />
        </Col>
      </Row>
    </NewsContainer>
  );
};

export default NewsScreen;
