const Confirmacao = ({ handleConfirmacaoSubmit, step, setStep, confirmacao, setConfirmacao }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Confirmação de Presença</h2>
        <p className="form__register__step">Step 1/{step}</p>
      </div>
      <form onSubmit={handleConfirmacaoSubmit} className="form__confirm">
        <label>
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
            className="regular__input"
          >
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <button className="continue__bttn" type="submit">
          CONTINUAR
        </button>
      </form>
    </>
  );
};

export default Confirmacao;
