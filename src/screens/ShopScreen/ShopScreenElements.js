import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgBg from "../../images/shop.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ImgBg});
  height: 95vh;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 760px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${ImgBg});
    background-position: 590px 0px;
    background-size: cover;
  }
  @media screen and (max-width: 360px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${ImgBg});
    background-position: 500px 0px;
    background-size: cover;
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 0.7rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 7vw, 4rem);
  margin-bottom: 1rem;
`;

export const HeroP = styled.h6`
  font-size: clamp(1.2rem, 3vw, 1rem);
  margin: 0px auto;
  margin-bottom: 2rem;
`;

export const HeroBtn = styled(Link)`
  font-size: 1.4rem;
  padding: 1rem 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #00d84a;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
