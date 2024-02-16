const DadosPessoais = ({handleNextYes, handleBackYes}: any) => {
  const generos = ["Masculino", "Feminino", "Outro"];
  const tamanhos = ["P", "M", "G", "GG", "EXG"];

  return (
    <>
      <div className="form__register__top">
        <h2>Dados Pessoais</h2>
        <p>Step 3/6</p>
      </div>
      <form className="personal__form">
        <input className="regular__input" type="text" placeholder="RG *" />
        <input className="regular__input" type="text" placeholder="CPF *" />
        <input className="regular__input" type="text" placeholder="Data de Nascimento *" />
        <select className="regular__input" name="" id="">
          <option value="">Gênero *</option>
          {generos.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
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
      </form>
      <div className="div__bttns">
        <button className="back__bttn" onClick={handleBackYes}>VOLTAR</button>
        <button className="continue__bttn" onClick={handleNextYes}>CONTINUAR</button>
      </div>
    </>
  );
};

export default DadosPessoais;
