import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  gap: 30px;
  .div__about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title__about {
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
    }
    .text__about {
      font-size: 20px;
      font-family: "Nunito Sans";
      font-weight: 200;
      line-height: 150%;
      color: #6c757d;
    }
    .important__about {
      font-size: 20px;
      font-family: "Nunito Sans";
      font-weight: 200;
      line-height: 150%;
      color: #6c757d;
    }
    .strong {
      color: black;
    }
  }
  .pepsico__small__banner {
    width: 100%;
  }
`;
