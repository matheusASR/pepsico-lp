import styled from "styled-components";

export const StyledRegister = styled.section`
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .register__title__box {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register__title {
    font-size: 25px;
  }
  .form__register__box {
    width: 90%;
  }
  .form__register__top {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .regular__input {
    width: 100%;
    height: 30px;
    border: 1px solid black;
  }
  .textarea__input {
    width: 100%;
    height: 60px;
    border: 1px solid black;
  }
  .div__bttns {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .back__bttn {
    width: 40%;
    border: 1px solid black;
  }
  .continue__bttn {
    width: 50%;
    background-color: blue;
    color: white;
  }
  .div__column {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    gap: 10px;
  }
  .contact__form, .personal__form, .pepsico__form, .form__confirm, .transport__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 0px;
  }
`;
