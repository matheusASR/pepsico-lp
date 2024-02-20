import { useContext, useState } from "react";
import { FormContext } from "../../../providers/FormContext";

const DadosPessoais = ({
  setEtapaSim,
  etapaSim,
  setFinalFormData,
  finalFormData,
}: any) => {
  const generos = ["Masculino", "Feminino", "Outro"];
  const tamanhos = ["P", "M", "G", "GG", "EXG"];
  const [foodRestriction, setFoodRestriction] = useState(false);
  const [needHelp, setNeedHelp] = useState(false);

  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEtapaSim(etapaSim + 1);
    setFinalFormData({ ...finalFormData, ...formData });
  };

  const backBttn = (e: any) => {
    e.preventDefault();
    const formKey = "dadosPessoais";
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
      dadosPessoais: {
        ...formData.dadosPessoais,
        [name]: value,
      },
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dadosPessoais: {
        ...formData.dadosPessoais,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pessoais</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">3</strong>/6
        </p>
      </div>
      <form className="personal__form" onSubmit={handleSubmit}>
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="RG *"
              value={formData.dadosPessoais.rg}
              onChange={handleInputChange}
              name="rg"
              required
            />

            <input
              className="regular__input"
              type="text"
              placeholder="CPF *"
              value={formData.dadosPessoais.cpf}
              onChange={handleInputChange}
              name="cpf"
              required
            />

            <input
              className="regular__input"
              type="text"
              placeholder="Data de Nascimento *"
              value={formData.dadosPessoais.dataNascimento}
              onChange={handleInputChange}
              name="dataNascimento"
              required
            />

            <select
              className="regular__input"
              value={formData.dadosPessoais.genero}
              onChange={handleSelectChange}
              name="genero"
              required
            >
              <option value="">Gênero *</option>
              {generos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </div>
          <div className="responsive__input">
            <select
              className="regular__input"
              value={formData.dadosPessoais.tamanhoCamiseta}
              onChange={handleSelectChange}
              name="tamanhoCamiseta"
              required
            >
              <option value="">Tamanho de Camiseta *</option>
              {tamanhos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>

            <select
              className="regular__input"
              value={formData.dadosPessoais.restricaoAlimentar}
              onChange={(e) => {
                handleSelectChange(e);
                if (e.target.value === "Sim") {
                  setFoodRestriction(true);
                }
              }}
              name="restricaoAlimentar"
              required
            >
              <option value="">Possui alguma restrição alimentar? *</option>
              <option value="Sim">Sim (Especifique)</option>
              <option value="Não">Não</option>
            </select>
            {foodRestriction ? (
              <input
                className="regular__input"
                type="text"
                placeholder="Razão"
                value={formData.dadosPessoais.restricaoAlimentarRazao}
                onChange={handleInputChange}
                name="restricaoAlimentarRazao"
                required
              />
            ) : null}
            <select
              className="regular__input"
              value={formData.dadosPessoais.necessidade}
              onChange={(e) => {
                handleSelectChange(e);
                if (e.target.value === "Sim") {
                  setNeedHelp(true);
                }
              }}
              name="necessidade"
              required
            >
              <option value="">Possui alguma necessidade? *</option>
              <option value="Sim">Sim (Especifique)</option>
              <option value="Não">Não</option>
            </select>
            {needHelp ? (
              <input
                className="regular__input"
                type="text"
                placeholder="Razão"
                value={formData.dadosPessoais.necessidadeRazao}
                onChange={handleInputChange}
                name="necessidadeRazao"
                required
              />
            ) : null}
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

export default DadosPessoais;
