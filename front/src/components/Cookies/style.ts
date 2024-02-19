import styled from "styled-components";

export const StyledCookies = styled.div`
  position: fixed;
  right: 50px;
  bottom: 35px;
  .cookies__img {
    height: 40px;
    width: 40px;
  }
  .cookies__img:hover {
    cursor: pointer;
  }
  .cookies__box {
    position: fixed;
    right: 100px;
    bottom: 85px;
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .divtop__cookies {
    display: flex;
    justify-content: space-between;
  }
  .underline {
    text-decoration: underline;
  }
  .orange {
    color: orange;
  }
  .grey {
    color: grey;
  }
  .divbottom__cookies {
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
    }
    .reject__bttn {
      border: 1px solid orange;
      border-radius: 25px;
      color: orange;
      padding: 20px 30px;
    }
    .accept__bttn {
      background-color: grey;
      border-radius: 25px;
      padding: 20px 30px;
    }
  }
`;
