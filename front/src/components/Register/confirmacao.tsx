const Confirmacao = ({ handleConfirmacaoSubmit, step, setStep, confirmacao, setConfirmacao }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Confirmação de Presença</h2>
        <p className="form__register__step">Step <strong className="form__register__step">1</strong>/{step}</p>
      </div>
      <div className="form__confirm">
        <label className="label__pattern">
          Você confirma a sua presença no evento?
          <select
            name="confirmacao"
            value={confirmacao}
            onChange={(e) => {
              setConfirmacao(e.target.value);
              if (e.target.value === "Sim") {
                setStep(6);
              } else {
                setStep(3);
              }
            }}
            className="regular__input input__confirm"
            required
          >
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <div className="align__end">
          <button className="continue__bttn" onClick={handleConfirmacaoSubmit}>
            CONTINUAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmacao;