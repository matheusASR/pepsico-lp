import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  background: linear-gradient(90deg, rgb(4, 67, 146) 0%, rgb(197, 41, 88) 90%);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .div__header {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
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
`;
