const DadosPepsicoNao = ({ handleNextNo, handleBackNo }: any) => {
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
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pepsico</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">2</strong>/3
        </p>
      </div>
      <form className="pepsico__form">
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Nome Completo *"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="GPID *"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="E-mail *"
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Departamento *"
            />
            <select className="regular__input" name="" id="">
              <option value="">Região*</option>
              {opcoesRegiao.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            <select className="regular__input" name="" id="">
              <option value="">Nível*</option>
              {todasOpcoes.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackNo}>
            VOLTAR
          </button>
          <button className="continue__bttn" onClick={handleNextNo}>
            CONTINUAR
          </button>
        </div>
      </form>
    </>
  );
};

export default DadosPepsicoNao;
