import { useContext } from "react";
import { FormContext } from "../../../providers/FormContext";


const DadosContato = ({ etapaSim, setEtapaSim, setFinalFormData, finalFormData }: any) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEtapaSim(etapaSim + 1);
    setFinalFormData({ ...finalFormData, ...formData });
  };

  const backBttn = (e:any) => {
    e.preventDefault()
    const formKey = "dadosContato";
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
      dadosContato: {
        ...formData.dadosContato,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados de Contato</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">4</strong>/6
        </p>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="responsive__div">
          <div className="responsive__input contact1">
            <input
              className="regular__input"
              type="number"
              placeholder="CEP *"
              value={formData.dadosContato.cep}
              onChange={handleInputChange}
              name="cep"
              required
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Endereço *"
              value={formData.dadosContato.endereco}
              onChange={handleInputChange}
              name="endereco"
              required
            />
            <div className="num__comp">
              <input
                className="regular__input number"
                type="number"
                placeholder="Número *"
                value={formData.dadosContato.numero}
                onChange={handleInputChange}
                name="numero"
                required
              />
              <input
                className="regular__input comp"
                type="text"
                placeholder="Complemento"
                value={formData.dadosContato.complemento}
                onChange={handleInputChange}
                name="complemento"
                required
              />
            </div>
            <input
              className="regular__input"
              type="text"
              placeholder="Bairro *"
              value={formData.dadosContato.bairro}
              onChange={handleInputChange}
              name="bairro"
              required
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Cidade *"
              value={formData.dadosContato.cidade}
              onChange={handleInputChange}
              name="cidade"
              required
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Estado *"
              value={formData.dadosContato.estado}
              onChange={handleInputChange}
              name="estado"
              required
            />
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para contato *"
              value={formData.dadosContato.telefoneContato}
              onChange={handleInputChange}
              name="telefoneContato"
              required
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
            <input
              className="regular__input"
              type="text"
              placeholder="Contato de Emergência *"
              value={formData.dadosContato.contatoEmergencia}
              onChange={handleInputChange}
              name="contatoEmergencia"
              required
            />
            <span className="span__contact">
              Ex:. Nome completo (Parentesco)
            </span>
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para emergência *"
              value={formData.dadosContato.telefoneEmergencia}
              onChange={handleInputChange}
              name="telefoneEmergencia"
              required
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
          </div>
        </div>
        <div className="div__bttns">
          <button className="back__bttn" onClick={backBttn}>
            VOLTAR
          </button>
          <button type="submit" className="continue__bttn" >
            CONTINUAR
          </button>
        </div>
      </form>
    </>
  );
};

export default DadosContato;
