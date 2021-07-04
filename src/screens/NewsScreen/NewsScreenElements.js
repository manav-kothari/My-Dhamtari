import styled from "styled-components";
import ImgBg from "../../images/news.jpg";

export const NewsContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ImgBg});
  height: 100%;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 760px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${ImgBg});
    background-position: center;
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
