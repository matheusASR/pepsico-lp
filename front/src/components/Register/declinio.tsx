import { useContext } from "react";
import { FormContext } from "../../providers/FormContext";
import { toast } from "react-toastify";
import { api } from "../../services/api";


const Declinio = ({ etapaNao, setEtapaNao, setFinalFormData, finalFormData }: any) => {
  const { formData, setFormData } = useContext(FormContext);

  const removeEmptyFields = (obj: any) => {
    if (Array.isArray(obj)) {
      return obj.filter((item) => item !== null && item !== undefined);
    }
    if (typeof obj === 'object' && obj !== null) {
      const newObj: any = {};
      for (const key in obj) {
        const value = removeEmptyFields(obj[key]);
        if (
          (Array.isArray(value) && value.length > 0) ||
          (!Array.isArray(value) && typeof value === 'object' && Object.keys(value).length > 0) || 
          (!Array.isArray(value) && typeof value !== 'object' && value !== '') 
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
        dadosPepsicoNao,
        motivoDeclinio
    } = inputData;

    return {
        ...dadosPepsicoNao,
        motivoDeclinio
    };
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const filteredFormData = removeEmptyFields({ ...finalFormData, ...formData });
    const ffd = transformData(filteredFormData);
    setFinalFormData(ffd)
    try {
      const response = await api.post("naocomparecimento/", ffd);
      if (response && response.data && response.statusText === "Created") {
        toast.success("Usuário inscrito com sucesso!")
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      } else {
        toast.error(
          "Erro ao cadastrar o usuário. Verifique os dados e tente novamente."
        );
      }
    } catch (error: any) {
      if (error.response.data.email) {
        toast.error(`Ocorreu um erro ao se inscrever: ${error.response.data.email}`);
      } else {
        toast.error(`Ocorreu um erro ao se inscrever: ${error.response.data}`);
      }
    }
  };


  const backBttn = (e:any) => {
    e.preventDefault()
    const formKey = "motivoDeclinio";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaNao(etapaNao - 1);
  };

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      motivoDeclinio: value,
    });
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Motivo</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">3</strong>/3
        </p>
      </div>
      <form className="decline__form" onSubmit={handleSubmit}>
        <label className="label__pattern">
          Informe o motivo do declínio. *
        </label>
        <textarea
          className="textarea__input"
          value={formData.motivoDeclinio}
          onChange={handleTextareaChange}
          name="motivoDeclinio"
          required
        />
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

export default Declinio;
