import React from "react";
import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import CardComponent from "./CardComponent";
import dmtkaraja from "../../images/ganeshchaturthi2021/01.jpg";
import amapara from "../../images/ganeshchaturthi2021/02.jpg";
import golabiri from "../../images/ganeshchaturthi2021/03.jpg";
import pump from "../../images/ganeshchaturthi2021/04.jpg";
import behind from "../../images/ganeshchaturthi2021/05.jpg";
import balak from "../../images/ganeshchaturthi2021/06.jpg";
import risai from "../../images/ganeshchaturthi2021/07.jpg";
import lal from "../../images/ganeshchaturthi2021/08.jpg";
import bhraman from "../../images/ganeshchaturthi2021/09.jpg";
import dhobi from "../../images/ganeshchaturthi2021/10.jpg";
import oshiya from "../../images/ganeshchaturthi2021/11.jpg";
import amapara2 from "../../images/ganeshchaturthi2021/12.jpg";
import kosta from "../../images/ganeshchaturthi2021/13.jpg";
import rambagh from "../../images/ganeshchaturthi2021/14.jpg";
import maitri from "../../images/ganeshchaturthi2021/15.jpg";
import marathapara from "../../images/ganeshchaturthi2021/16.jpg";
import jagd from "../../images/ganeshchaturthi2021/17.jpg";
import ratna from "../../images/ganeshchaturthi2021/18.jpg";
import unkonown from "../../images/ganeshchaturthi2021/19.jpg";
import shanti from "../../images/ganeshchaturthi2021/20.jpg";
import gokul from "../../images/ganeshchaturthi2021/21.jpg";
import risai2 from "../../images/ganeshchaturthi2021/22.jpg";
import risai3 from "../../images/ganeshchaturthi2021/23.jpg";
import unknown2 from "../../images/ganeshchaturthi2021/24.jpg";
import sorid from "../../images/ganeshchaturthi2021/25.jpg";
import sadar1 from "../../images/ganeshchaturthi2021/26.jpg";

const Ganeshchaturthi2021 = () => {
  return (
    <div>
      <Header />
      <h4 className="heading text-center mt-3 mx-1">
        Shri Ganesh Pandal/Jhanki Darshan (Dhamtari):
      </h4>
      <Row>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/B6TdzgS_BaQ?autoplay=1&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-0"
        ></iframe>
        <CardComponent name="Near Ghadi Chowk" image={dmtkaraja} />
        <CardComponent name="Aamapara" image={amapara} />
        <CardComponent name="Oshiya Vihar Colony - 2" image={oshiya} />
        <CardComponent name="Near Gole Bazaar" image={golabiri} />
        <CardComponent name="Near Ghadi Chowk" image={pump} />
        <CardComponent name="Near Aamapara" image={behind} />
        <CardComponent name="Balak Chowk" image={balak} />
        <CardComponent name="Lal Bagicha" image={lal} />
        <CardComponent name="Near Dhobi Chowk" image={dhobi} />
        <CardComponent name="Near Kostapara" image={kosta} />
        <CardComponent name="Bhramanpara" image={bhraman} />
        <CardComponent name="Risaipara" image={risai} />
        <CardComponent name="Near Aamapara" image={amapara2} />
        <CardComponent name="Maitri Vihar Colony" image={maitri} />
        <CardComponent name="Rambagh" image={rambagh} />
        <CardComponent name="Marathapara" image={marathapara} />
        <CardComponent name="Jagdalpur Road" image={jagd} />
        <CardComponent name="Ratnabandha Road" image={ratna} />
        <CardComponent name="-" image={unkonown} />
        <CardComponent name="Shanti Colony" image={shanti} />
        <CardComponent name="Near Gokulpur" image={gokul} />
        <CardComponent name="Near Risaipara" image={risai2} />
        <CardComponent name="Near Risaipara" image={risai3} />
        <CardComponent name="Sorid Nagar" image={sorid} />
        <CardComponent name="Near Sadar" image={sadar1} />
        <CardComponent name="-" image={unknown2} />
      </Row>
    </div>
  );
};

export default Ganeshchaturthi2021;
