import React from "react";
import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import CardComponent from "./CardComponent";
import dmtkaraja from "../../images/ganeshchaturthi2021/01.jpg";
import amapara from "../../images/ganeshchaturthi2021/02.jpeg";
import golabiri from "../../images/ganeshchaturthi2021/03.jpg";
import pump from "../../images/ganeshchaturthi2021/04.jpg";
import behind from "../../images/ganeshchaturthi2021/05.jpg";
import balak from "../../images/ganeshchaturthi2021/06.jpeg";
import marathapara from "../../images/ganeshchaturthi2021/07.jpg";
import rambagh from "../../images/ganeshchaturthi2021/08.jpg";
import amapara2 from "../../images/ganeshchaturthi2021/09.jpg";
import sadar1 from "../../images/ganeshchaturthi2021/10.jpg";
import gokul from "../../images/ganeshchaturthi2021/11.jpg";

const Ganeshchaturthi2021 = () => {
  return (
    <div>
      <Header />
      <h4 className="heading text-center mt-3">Ganesh Chaturthi Darshan:</h4>
      <Row>
        <CardComponent name="Near Ghadi Chowk" image={dmtkaraja} />
        <CardComponent name="Aamapara" image={amapara} />
        <CardComponent name="Near Gole Bazaar" image={golabiri} />
        <CardComponent name="Near Ghadi Chowk" image={pump} />
        <CardComponent name="Near Aamapara" image={behind} />
        <CardComponent name="Balak Chowk" image={balak} />
        <CardComponent name="Marathapara" image={marathapara} />
        <CardComponent name="Rambagh" image={rambagh} />
        <CardComponent name="Near Aamapara" image={amapara2} />
        <CardComponent name="Near Sadar" image={sadar1} />
        <CardComponent name="Near Gokulpur" image={gokul} />
      </Row>
    </div>
  );
};

export default Ganeshchaturthi2021;
