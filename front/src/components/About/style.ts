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
      font-style: italic;
    }
    .text__about {
      font-size: 20px;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      font-weight: 200;
      line-height: 150%;
      color: #6c757d;
    }
    .important__about {
      font-size: 20px;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
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
    box-shadow: 2px 20px 30px 0px rgba(20,20,20,.2);
  }
  @media (min-width: 800px) {
    padding: 0px 10%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0px 5%;
    .div__about {
      width: 50%;
    }
    .pepsico__small__banner {
      width: 50%;
    }
  }
`;
