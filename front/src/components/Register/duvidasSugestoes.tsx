const DuvidasSugestoes = ({ handleBackYes }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2>Dúvidas ou Sugestões</h2>
        <p>Step 6/6</p>
      </div>
      <h2>Use este campo para:</h2>
      <div className="div__column">
        <p>Sugerir colega de quarto</p>
        <p>Dúvidas ou Sugestões</p>
      </div>
      <form>
        <input className="textarea__input" type="textarea" />
        <p>
          Declaro que concordo com as Política de Privacidade RSTCom e Termos e
          Condições de Uso RSTCom
        </p>
      </form>
      <div className="div__bttns">
        <button className="back__bttn" onClick={handleBackYes}>
          VOLTAR
        </button>
        <button className="continue__bttn">INSCREVER-SE</button>
      </div>
    </>
  );
};

export default DuvidasSugestoes;
