const DadosPessoais = ({ handleNextYes, handleBackYes }: any) => {
  const generos = ["Masculino", "Feminino", "Outro"];
  const tamanhos = ["P", "M", "G", "GG", "EXG"];

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pessoais</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">3</strong>/6
        </p>
      </div>
      <form className="personal__form">
        <div className="responsive__div">
          <div className="responsive__input">
            <input className="regular__input" type="text" placeholder="RG *" />
            <input className="regular__input" type="text" placeholder="CPF *" />
            <input
              className="regular__input"
              type="text"
              placeholder="Data de Nascimento *"
            />
            <select className="regular__input" name="" id="">
              <option value="">Gênero *</option>
              {generos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </div>
          <div className="responsive__input">
            <select className="regular__input" name="" id="">
              <option value="">Tamanho de Camiseta *</option>
              {tamanhos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            <select className="regular__input" name="" id="">
              <option value="">Possui alguma restrição alimentar? *</option>
              <option>Sim (Especifique)</option>
              <option>Não</option>
            </select>
            <select className="regular__input" name="" id="">
              <option value="">Possui alguma necessidade? *</option>
              <option>Sim (Especifique)</option>
              <option>Não</option>
            </select>
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

export default DadosPessoais;
