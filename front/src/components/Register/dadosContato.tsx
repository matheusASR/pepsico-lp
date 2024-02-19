const DadosContato = ({ handleNextYes, handleBackYes }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados de Contato</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">4</strong>/6
        </p>
      </div>
      <form className="contact__form">
        <div className="responsive__div">
          <div className="responsive__input contact1">
            <input
              className="regular__input"
              type="number"
              placeholder="CEP *"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Endereço *"
            />
            <div className="num__comp">
              <input
                className="regular__input number"
                type="number"
                placeholder="Número *"
              />
              <input
                className="regular__input comp"
                type="text"
                placeholder="Complemento"
              />
            </div>
            <input
              className="regular__input"
              type="text"
              placeholder="Bairro *"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Cidade *"
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Estado *"
            />
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para contato *"
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
            <input
              className="regular__input"
              type="text"
              placeholder="Contato de Emergência *"
            />
            <span className="span__contact">
              Ex:. Nome completo (Parentesco)
            </span>
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para emergência *"
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
          </div>
        </div>
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

export default DadosContato;
