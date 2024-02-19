import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  background: linear-gradient(90deg, rgb(4, 67, 146) 0%, rgb(197, 41, 88) 90%);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .div__header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 13%;
    align-items: center;
  }
  .pepsico-title {
    max-width: 150px;
  }
  .menu-lines-box {
    height: 35px;
    width: 36px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-lines {
      width: 70%;
      height: 90%;
    }
  }
  .menu-lines-box:hover {
    cursor: pointer;
  }
  .x__close {
    height: 30px;
    width: 30px;
  }
  .div__header__menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgb(4, 67, 146) 0%,
      rgb(197, 41, 88) 90%
    );
  }
  .pattern__style {
    height: 55px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgb(4, 67, 146) 0%,
      rgb(197, 41, 88) 90%
    );
    border-bottom: 1px solid black;
    text-align: start;
    padding-left: 30px;
    font-size: 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: white;
    letter-spacing: 4px;
  }
  .pattern__style:hover {
    color: blueviolet;
  }
  .menu__header__desktop {
    display: none;
  }
  @media (min-width: 1000px) {
    .div__header {
      padding: 0px 6%;
    }
    .menu-lines-box {
      display: none;
    }
    .menu__header__desktop {
      display: flex;
      gap: 30px;
    }
    .pattern__style2 {
      font-size: 15px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      color: white;
      background-color: transparent;
    }
    .pattern__style2:hover {
      color: blueviolet;
    }
  }
`;
