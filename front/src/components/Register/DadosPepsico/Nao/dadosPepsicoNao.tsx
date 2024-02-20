import { useContext } from "react";
import { FormContext } from "../../../../providers/FormContext.tsx"

const DadosPepsicoNao = ({
  setEtapaNao,
  etapaNao,
  setFinalFormData,
  finalFormData,
}: any) => {
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

  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEtapaNao(etapaNao + 1);
    setFinalFormData({ ...finalFormData, ...formData });
  };

  const backBttn = (e: any) => {
    e.preventDefault();
    const formKey = "dadosPepsicoNao";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaNao(etapaNao - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dadosPepsicoNao: {
        ...formData.dadosPepsicoNao,
        [name]: value,
      },
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dadosPepsicoNao: {
        ...formData.dadosPepsicoNao,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pepsico</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">2</strong>/3
        </p>
      </div>
      <form className="pepsico__form" onSubmit={handleSubmit}>
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Nome Completo *"
              value={formData.dadosPepsicoNao.nomeCompleto}
              onChange={handleInputChange}
              name="nomeCompleto"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="GPID *"
              value={formData.dadosPepsicoNao.gpid}
              onChange={handleInputChange}
              name="gpid"
            />
            <input
              className="regular__input"
              type="text"
              placeholder="E-mail *"
              value={formData.dadosPepsicoNao.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Departamento *"
              value={formData.dadosPepsicoNao.departamento}
              onChange={handleInputChange}
              name="departamento"
            />
            <select
              className="regular__input"
              value={formData.dadosPepsicoNao.regiao}
              onChange={handleSelectChange}
              name="regiao"
            >
              <option value="">Região*</option>
              {opcoesRegiao.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            <select
              className="regular__input"
              value={formData.dadosPepsicoNao.nivel}
              onChange={handleSelectChange}
              name="nivel"
            >
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
          <button className="back__bttn" onClick={backBttn}>
            VOLTAR
          </button>
          <button type="submit" className="continue__bttn">
            CONTINUAR
          </button>
        </div>
      </form>
    </>
  );
};

export default DadosPepsicoNao;
