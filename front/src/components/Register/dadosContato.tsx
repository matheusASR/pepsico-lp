const DadosContato = ({ handleNextYes, handleBackYes }: any) => {
  return (
    <>
      <div className="form__register__top">
        <h2>Dados de Contato</h2>
        <p>Step 4/6</p>
      </div>
      <form className="contact__form">
        <input className="regular__input" type="number" placeholder="CEP *" />
        <input
          className="regular__input"
          type="text"
          placeholder="Endereço *"
        />
        <input
          className="regular__input"
          type="number"
          placeholder="Número *"
        />
        <input
          className="regular__input"
          type="text"
          placeholder="Complemento"
        />
        <input className="regular__input" type="text" placeholder="Bairro *" />
        <input className="regular__input" type="text" placeholder="Cidade *" />
        <input className="regular__input" type="text" placeholder="Estado *" />
        <input
          className="regular__input"
          type="number"
          placeholder="Telefone para contato *"
        />
        <span>Digite apenas números incluindo o DDD</span>
        <input
          className="regular__input"
          type="text"
          placeholder="Contato de Emergência *"
        />
        <span>Ex:. Nome completo (Parentesco)</span>
        <input
          className="regular__input"
          type="number"
          placeholder="Telefone para emergência *"
        />
        <span>Digite apenas números incluindo o DDD</span>
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
