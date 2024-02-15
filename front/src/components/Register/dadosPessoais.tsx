const DadosPessoais = ({handleNextYes, handleBackYes}: any) => {
  const generos = ["Masculino", "Feminino", "Outro"];
  const tamanhos = ["P", "M", "G", "GG", "EXG"];

  return (
    <>
      <h2>Dados Pessoais</h2>
      <form>
        <input type="text" placeholder="RG *" />
        <input type="text" placeholder="CPF *" />
        <input type="text" placeholder="Data de Nascimento *" />
        <select name="" id="">
          <option value="">Gênero *</option>
          {generos.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
        <select name="" id="">
          <option value="">Tamanho de Camiseta *</option>
          {tamanhos.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
        <select name="" id="">
          <option value="">Possui alguma restrição alimentar? *</option>
          <option>Sim (Especifique)</option>
          <option>Não</option>
        </select>
        <select name="" id="">
          <option value="">Possui alguma necessidade? *</option>
          <option>Sim (Especifique)</option>
          <option>Não</option>
        </select>
      </form>
      <div>
        <button onClick={handleBackYes}>VOLTAR</button>
        <button onClick={handleNextYes}>CONTINUAR</button>
      </div>
    </>
  );
};

export default DadosPessoais;
