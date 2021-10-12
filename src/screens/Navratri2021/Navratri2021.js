import React from "react";
import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import CardComponent from "./CardComponent";
import one from "../../images/navratri2021/one.jpeg";
import two from "../../images/navratri2021/two.jpeg";
import three from "../../images/navratri2021/three.jpeg";
import four from "../../images/navratri2021/four.jpeg";
import five from "../../images/navratri2021/five.jpeg";
import six from "../../images/navratri2021/six.jpeg";
import seven from "../../images/navratri2021/seven.jpeg";
import eight from "../../images/navratri2021/eight.jpeg";
import nine from "../../images/navratri2021/nine.jpeg";
import ten from "../../images/navratri2021/ten.jpeg";
import eleven from "../../images/navratri2021/eleven.jpeg";
import twelve from "../../images/navratri2021/twelve.jpeg";
import thirteen from "../../images/navratri2021/thirteen.jpeg";
import fourteen from "../../images/navratri2021/fourteen.jpeg";
import fifteen from "../../images/navratri2021/fifteen.jpeg";
import sixteen from "../../images/navratri2021/sixteen.jpeg";
import seventeen from "../../images/navratri2021/seventeen.jpeg";
import eighteen from "../../images/navratri2021/eighteen.jpeg";
import nineteen from "../../images/navratri2021/nineteen.jpeg";
import twenty from "../../images/navratri2021/twenty.jpeg";
import twentyone from "../../images/navratri2021/twentyone.jpeg";
import twentytwo from "../../images/navratri2021/twentytwo.jpeg";

const Navratri2021 = () => {
  return (
    <div>
      <Header />
      <h4 className="heading text-center mt-3 mx-1">
        Navratri Darshan (Dhamtari):
      </h4>
      <Row>
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/oNQ6nMZqzQg?autoplay=1&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-0"
        ></iframe>

        <CardComponent name="Shri Gujrati Samaj" image={one} />
        <CardComponent name="Maa Bilai Mata Mandir" image={ten} />
        <CardComponent name="Maa Angarmoti Mandir, Gangrel" image={five} />
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/S5Z48SLlj5s?autoplay=1&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-0"
        ></iframe>
        <CardComponent name="Dhamtari ki Rani" image={two} />
        <CardComponent
          name="Navyuvak Durga Utsav Samiti, Baniypara"
          image={three}
        />
        <CardComponent name="" image={four} />
        <CardComponent name="" image={six} />
        <CardComponent name="Near Dhobi Chowk" image={seven} />
        <CardComponent name="" image={eight} />
        <CardComponent name="Shiv Chowk Durga Utsav Samiti" image={nine} />
        <CardComponent name="Risaipara Durga Utsav Samiti" image={eleven} />
        <CardComponent name="Near Kodumal Dharamshala" image={twelve} />
        <CardComponent name="Sadar Bazaar" image={thirteen} />
        <CardComponent name="Near Kacheri garden" image={fourteen} />
        <CardComponent name="Sorid Chowk" image={fifteen} />
        <CardComponent name="" image={sixteen} />
        <CardComponent name="" image={seventeen} />
        <CardComponent name="" image={eighteen} />
        <CardComponent name="" image={nineteen} />
        <CardComponent name="" image={twenty} />
        <CardComponent name="" image={twentyone} />
        <CardComponent name="" image={twentytwo} />
        <iframe
          width="560"
          height="315"
          autoplay="1"
          src="https://www.youtube.com/embed/1cbYblxqYJQ?start=5?autoplay=1&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          allowfullscreen="allowfullscreen"
          className="mx-auto my-0"
        ></iframe>
      </Row>
    </div>
  );
};

export default Navratri2021;
