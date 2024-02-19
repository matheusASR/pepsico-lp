const Declinio = ({ handleBackNo }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Motivo</h2>
        <p className="form__register__step">Step <strong className="form__register__step">3</strong>/3</p>
      </div>
      <form className="decline__form">
        <label className="label__pattern">Informe o motivo do declínio. *</label>
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
