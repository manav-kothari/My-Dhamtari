import React from "react";
import { Button, Row } from "react-bootstrap";
import Header from "../../components/Header";
import v01 from "../../images/ganeshchaturthi2021/v01.jpeg";
import CardComponent from "./CardComponent";

const GaneshVisarjan2021 = () => {
  return (
    <div>
      <Header />
      <h4 className="heading text-center mt-3 mx-1">Shri Ganesh Visarjan:</h4>

      <Row>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/os1XlI-P7-4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/UczzcNLA2uc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/Jy772lpRxdQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <CardComponent name="Gole Bazzar" image={v01} />
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/cWLCwN1Hp44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/9oyphLPSzqA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/Zu5bc2m6Rck"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/wNEddrYrKp4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/SLojNWzTaTQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/aPz-JYxYP2Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/pdMB8o8VYyo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/ah89eDVnXUk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-2"
        ></iframe>

        <div className="alert alert-info text-center blink_me p-3 px-4d my-3 mx-auto text-capitalize text-dark">
          <h2 className="text-center">More Coming Soon...</h2>
        </div>
      </Row>
      <Row>
        <Button
          className="btn-success text-center mx-auto my-4"
          href="/ganeshchaturthipandal"
        >
          View Ganesh Murti and Pandals
        </Button>
      </Row>
    </div>
  );
};

export default GaneshVisarjan2021;
