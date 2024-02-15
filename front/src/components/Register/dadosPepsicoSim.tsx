const DadosPepsicoSim = ({handleNextYes, handleBackYes}: any) => {
  const opcoesL = Array.from({ length: 11 }, (_, i) => `L${i + 1}`);
  const opcoesLG = Array.from({ length: 5 }, (_, i) => `LG${i + 1}`);
  const todasOpcoes = [...opcoesL, ...opcoesLG];
  const opcoesRegiao = [
    "SALES ESTRATEGY",
    "DX",
    "KAN/CASH/ECOMM/NOVOS NEGOCIOS E CHANNEL DEVELOPMENT",
    "3PD/SALES OPS",
    "DTS",
    "NENO",
    "LESTE",
    "CO/SUL",
    "SÃO PAULO",
    "ÁREA CONVIDADA",
  ];

  return (
    <>
      <h2>Dados Pepsico</h2>
      <form>
        <input type="text" placeholder="Nome Completo *" />
        <input type="text" placeholder="GPID *" />
        <input type="text" placeholder="E-mail *" />
        <input type="text" placeholder="Departamento *" />
        <select name="" id="">
          <option value="">Região*</option>
          {opcoesRegiao.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
        <select name="" id="">
          <option value="">Nível*</option>
          {todasOpcoes.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </form>
      <div>
        <button onClick={handleBackYes}>VOLTAR</button>
        <button onClick={handleNextYes}>CONTINUAR</button>
      </div>
    </>
  );
};

export default DadosPepsicoSim;
