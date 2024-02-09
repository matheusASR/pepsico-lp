import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  .divtop__footer {
    background: linear-gradient(90deg, rgb(4, 67, 146) 0%, rgb(197, 41, 88) 90%);
    height: 200px;
    .pepsico-title {
      max-width: 150px;
    }
    .copyright-text {
        color: white;
    }
  }
  .divbottom__footer {
    background-color: #18191b;
    color: white;
  }
  .rst__logo {
    width: 35px;
    height: 35px;
  }
`;
