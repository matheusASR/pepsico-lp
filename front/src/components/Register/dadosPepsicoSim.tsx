import { useContext } from "react";
import { FormContext } from "../../providers/FormContext.tsx";

const DadosPepsicoSim = ({
  setEtapaSim,
  etapaSim,
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
    setEtapaSim(etapaSim + 1);
    setFinalFormData({ ...finalFormData, ...formData });
  };

  const backBttn = (e: any) => {
    e.preventDefault();
    const formKey = "dadosPepsicoSim";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaSim(etapaSim - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dadosPepsicoSim: {
        ...formData.dadosPepsicoSim,
        [name]: value,
      },
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dadosPepsicoSim: {
        ...formData.dadosPepsicoSim,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pepsico</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">2</strong>/6
        </p>
      </div>
      <form className="pepsico__form" onSubmit={handleSubmit}>
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Nome Completo *"
              value={formData.dadosPepsicoSim.nomeCompleto}
              onChange={handleInputChange}
              name="nomeCompleto"
              required
            />
            <input
              className="regular__input"
              type="text"
              placeholder="GPID *"
              value={formData.dadosPepsicoSim.gpid}
              onChange={handleInputChange}
              name="gpid"
              required
            />
            <input
              className="regular__input"
              type="email"
              placeholder="E-mail *"
              value={formData.dadosPepsicoSim.email}
              onChange={handleInputChange}
              name="email"
              required
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Departamento *"
              value={formData.dadosPepsicoSim.departamento}
              onChange={handleInputChange}
              name="departamento"
              required
            />
            <select
              className="regular__input"
              value={formData.dadosPepsicoSim.regiao}
              onChange={handleSelectChange}
              name="regiao"
              required
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
              value={formData.dadosPepsicoSim.nivel}
              onChange={handleSelectChange}
              name="nivel"
              required
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

export default DadosPepsicoSim;
