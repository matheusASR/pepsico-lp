import { useContext } from "react";
import { FormContext } from "../../providers/FormContext";


const Declinio = ({ etapaNao, setEtapaNao, setFinalFormData, finalFormData }: any) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFinalFormData({ ...finalFormData, ...formData });
    const filteredFormData = Object.fromEntries(
      Object.entries(finalFormData).filter(([, value]) => {
        if (typeof value === 'object' && value !== null) {
          const nestedEntries = Object.entries(value);
          const filteredNestedEntries = nestedEntries.filter(([_, nestedValue]) => nestedValue !== '');
          return filteredNestedEntries.length > 0;
        } else {
          return value !== '';
        }
      })
    );
  
    setFinalFormData(filteredFormData);
    console.log(filteredFormData);
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
