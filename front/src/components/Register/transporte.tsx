const Transporte = ({ handleBackYes, handleNextYes }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Transporte</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">5</strong>/6
        </p>
      </div>
      <form className="transport__form">
        <label className="label__pattern">
          Necessita de transporte aéreo?
          <select className="regular__input input__transport">
            <option value="">Selecione... *</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <label className="label__pattern">
          Como você planeja chegar ao evento?
          <select className="regular__input input__transport">
            <option value="">Selecione... *</option>
            <option value="Sim">
              Transfer fornecido pelo evento (Saída do escritório Único)
            </option>
            <option value="Não">Veículo próprio</option>
          </select>
        </label>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackYes}>
            VOLTAR
          </button>
          <button className="continue__bttn" onClick={handleNextYes}>
            CONTINUAR
          </button>
        </div>
      </form>
    </>
  );
};

export default Transporte;
