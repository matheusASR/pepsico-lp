const Declinio = ({ handleBackNo }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2>Motivo</h2>
        <p>Step 3/3</p>
      </div>
      <form className="decline__form">
        <label>Informe o motivo do declínio. *</label>
        <input className="textarea__input" type="textarea" />
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackNo}>
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

export default Declinio;
