import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  .divtop__footer {
    background: linear-gradient(
      90deg,
      rgb(4, 67, 146) 0%,
      rgb(197, 41, 88) 90%
    );
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    justify-content: center;
    .pepsico-title {
      max-width: 180px;
    }
    .copyright-text {
      color: white;
      font-size: 17px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    .doubt__contact {
      color: white;
      font-size: 17px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
  .divbottom__footer {
    background-color: #18191b;
    color: white;
    height: 180px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
    padding-top: 20px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .rst__logo {
    width: 35px;
    height: 35px;
  }
  .click__here {
    color: grey;
  }
  .footer__text {
    color: white;
    font-size: 17px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .div__divtop__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 15px;
  }
  .underline {
    text-decoration: underline;
  }
  @media (min-width: 800px) {
    .divtop__footer {
      flex-direction: row;
      height: 200px;
    }
    .divbottom__footer {
      flex-direction: row;
      justify-content: center;
      height: 100px;
      padding-bottom: 20px;
    }
  }
`;
