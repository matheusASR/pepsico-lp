const DadosContato = ({handleNextYes, handleBackYes}: any) => {
  return (
    <>
      <h2>Dados de Contato</h2>
      <form>
        <input type="number" placeholder="CEP *" />
        <input type="text" placeholder="Endereço *" />
        <input type="number" placeholder="Número *" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Bairro *" />
        <input type="text" placeholder="Cidade *" />
        <input type="text" placeholder="Estado *" />
        <input type="number" placeholder="Telefone para contato *" />
        <span>Digite apenas números incluindo o DDD</span>
        <input type="text" placeholder="Contato de Emergência *" />
        <span>Ex:. Nome completo (Parentesco)</span>
        <input type="number" placeholder="Telefone para emergência *" />
        <span>Digite apenas números incluindo o DDD</span>
      </form>
      <div>
        <button onClick={handleBackYes}>VOLTAR</button>
        <button onClick={handleNextYes}>CONTINUAR</button>
      </div>
    </>
  );
};

export default DadosContato;
