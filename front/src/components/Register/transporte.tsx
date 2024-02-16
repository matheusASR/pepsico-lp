const Transporte = ({ handleBackYes, handleNextYes }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2>Transporte</h2>
        <p>Step 5/6</p>
      </div>
      <form className="transport__form">
        <label>
          Necessita de transporte aéreo?
          <select className="regular__input">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
      </form>
      <div className="div__bttns">
        <button className="back__bttn" onClick={handleBackYes}>
          VOLTAR
        </button>
        <button className="continue__bttn" onClick={handleNextYes}>
          CONTINUAR
        </button>
      </div>
    </>
  );
};

export default Transporte;
