import styled from "styled-components";

export const StyledRegister = styled.section`
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .register__title__box {
    padding-top: 100px;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
  }
  .register__title {
    font-size: 35px;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-style: italic;
  }
  .form__register__box {
    width: 80%;
    padding: 20px;
    padding-bottom: 30px;
    border-radius: 5px;
    box-shadow: 2px 20px 30px 0px rgba(20, 20, 20, 0.2);
  }
  .form__register__top {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  .form__register__title {
    color: #6c757d;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 18px;
  }
  .form__register__step {
    color: #6c757d;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 16px;
  }
  .regular__input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border: 1px solid #6c757d;
    padding-left: 10px;
    color: #6c757d;
  }
  .input__confirm {
    margin-top: 30px;
  }
  .input__transport {
    margin-top: 20px;
  }
  .textarea__input {
    width: 100%;
    border: 1px solid #6c757d;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    height: 150px;
    padding: 10px;
  }
  .div__bttns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  .back__bttn {
    width: 90px;
    background-color: white;
    color: black;
    letter-spacing: 2px;
    padding: 5px 0px;
    border: 1px solid black;
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .continue__bttn {
    width: 120px;
    background-color: white;
    color: #6c757d;
    letter-spacing: 2px;
    padding: 5px 0px;
    border: 1px solid black;
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .div__column {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    gap: 10px;
  }
  .contact__form,
  .personal__form,
  .pepsico__form,
  .form__confirm,
  .transport__form,
  .decline__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 0px;
  }
  .transport__form {
    padding-top: 40px;
  }
  .form__confirm {
    padding-top: 40px;
    gap: 90px;
  }
  .align__end {
    display: flex;
    width: 100%;
    align-items: end;
    justify-content: end;
  }
  .label__pattern {
    color: black;
    font-weight: bold;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 16px;
  }
  .span__contact {
    color: #6c757d;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 12px;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .doubt__text {
    color: black;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }
  .politics__text {
    padding-right: 20px;
  }
  .underline {
    text-decoration: underline;
    color: blue;
  }
  .responsive__div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .responsive__input {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .num__comp {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0px;
  }
  .contact1 {
    gap: 20px;
  }
  @media (min-width: 800px) {
    .form__register__box {
      width: 60%;
    }
    .responsive__div {
      flex-direction: row;
      gap: 30px;
    }
    .responsive__input {
      width: 50%;
    }
    .num__comp {
      flex-direction: row;
      gap: 20px;
    }
    .number {
      width: 30%;
    }
    .comp {
      width: 70%;
    }
  }
`;
