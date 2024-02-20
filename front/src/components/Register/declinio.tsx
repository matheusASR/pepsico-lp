import { useState } from "react";

const Declinio = ({ handleBackNo }: any) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("foi")
    console.log({
      motivoDeclinio: reason
    });
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setReason(value);
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Motivo</h2>
        <p className="form__register__step">Step <strong className="form__register__step">3</strong>/3</p>
      </div>
      <form className="decline__form" onSubmit={handleSubmit}>
        <label className="label__pattern">Informe o motivo do declínio. *</label>
        <textarea
          className="textarea__input"
          value={reason}
          onChange={handleReasonChange}
          required
        />
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackNo}>
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
