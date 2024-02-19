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
    height: 170px;
    width: 100%;
    background: linear-gradient(90deg, rgb(4, 67, 146) 0%, rgb(197, 41, 88) 90%);
  }
`;
