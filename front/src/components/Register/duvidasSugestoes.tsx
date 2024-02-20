import { useForm } from "react-hook-form";

const DuvidasSugestoes = ({ handleBackYes }: any) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log("foi")
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dúvidas ou Sugestões</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">6</strong>/6
        </p>
      </div>
      <br></br>
      <h2 className="doubt__text uppercase">Use este campo para:</h2>
      <div className="div__column">
        <p className="doubt__text">•⁠ Sugerir colega de quarto</p>
        <p className="doubt__text">•⁠ ⁠Dúvidas e sugestões</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea className="textarea__input" {...register("duvidaSugestao")} />
        <label className="politics__text">
          <input type="checkbox" required/> Declaro que concordo com as{" "}
          <a
            className="underline"
            target="blank"
            href="https://4yourlive.com/%20gigacolaboradores/privacy-and-policy"
          >
            Política de Privacidade RSTCom
          </a>{" "}
          e{" "}
          <a
            className="underline"
            target="blank"
            href="https://4yourlive.com/%20gigacolaboradores/terms-of-use"
          >
            Termos e Condições de Uso RSTCom
          </a>
        </label>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackYes}>
            VOLTAR
          </button>
          <button className="continue__bttn" type="submit">
            INSCREVER-SE
          </button>
        </div>
      </form>
    </>
  );
};

export default DuvidasSugestoes;
