import { useContext } from "react";
import { FormContext } from "../../providers/FormContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const DuvidasSugestoes = ({
  finalFormData,
  setFinalFormData,
  setEtapaSim,
  etapaSim,
}: any) => {
  const { formData, setFormData } = useContext(FormContext);

  const removeEmptyFields = (obj: any) => {
    if (Array.isArray(obj)) {
      return obj.filter((item) => item !== null && item !== undefined);
    }
    if (typeof obj === "object" && obj !== null) {
      const newObj: any = {};
      for (const key in obj) {
        const value = removeEmptyFields(obj[key]);
        if (
          (Array.isArray(value) && value.length > 0) ||
          (!Array.isArray(value) &&
            typeof value === "object" &&
            Object.keys(value).length > 0) ||
          (!Array.isArray(value) && typeof value !== "object" && value !== "")
        ) {
          newObj[key] = value;
        }
      }
      return newObj;
    }
    return obj;
  };

  const transformData = (inputData: any) => {
    const {
      dadosPepsicoSim,
      dadosPessoais,
      dadosContato,
      transporte,
      duvidaSugestao,
    } = inputData;

    return {
      ...dadosPepsicoSim,
      ...dadosPessoais,
      ...dadosContato,
      ...transporte,
      duvidaSugestao,
    };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const filteredFormData = removeEmptyFields({
      ...finalFormData,
      ...formData,
    });
    const ffd = transformData(filteredFormData);
    setFinalFormData(ffd);
    try {
      const response = await api.post("comparecimento/", ffd);
      if (response && response.data && response.statusText === "Created") {
        toast.success("Usuário inscrito com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(
          "Erro ao cadastrar o usuário. Verifique os dados e tente novamente."
        );
      }
    } catch (error: any) {
      if (error.response.data.email) {
        toast.error(
          `Ocorreu um erro ao se inscrever: ${error.response.data.email}`
        );
      } else {
        toast.error(`Ocorreu um erro ao se inscrever: ${error.response.data}`);
      }
    }
  };

  const backBttn = (e: any) => {
    e.preventDefault();
    const formKey = "duvidaSugestao";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaSim(etapaSim - 1);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      duvidaSugestao: value,
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dúvidas ou Sugestões</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">6</strong>/6
        </p>
      </div>
      <br></br>
      <h2 className="doubt__text uppercase">Use este campo para:</h2>
      <div className="div__column">
        <p className="doubt__text">•⁠ Sugerir colega de quarto</p>
        <p className="doubt__text">•⁠ ⁠Dúvidas e sugestões</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea__input"
          value={formData.duvidaSugestao}
          onChange={handleTextareaChange}
          name="duvidaSugestao"
          required
        />
        <label className="politics__text">
          <input type="checkbox" required /> Declaro que concordo com as{" "}
          <a
            className="underline"
            target="blank"
            href="https://4yourlive.com/%20gigacolaboradores/privacy-and-policy"
          >
            Política de Privacidade RSTCom
          </a>{" "}
          e{" "}
          <a
            className="underline"
            target="blank"
            href="https://4yourlive.com/%20gigacolaboradores/terms-of-use"
          >
            Termos e Condições de Uso RSTCom
          </a>
        </label>
        <div className="div__bttns">
          <button className="back__bttn" onClick={backBttn}>
            VOLTAR
          </button>
          <button className="continue__bttn" type="submit">
            INSCREVER-SE
          </button>
        </div>
      </form>
    </>
  );
};

export default DuvidasSugestoes;
