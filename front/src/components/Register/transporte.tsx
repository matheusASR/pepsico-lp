import { useForm } from "react-hook-form";

const Transporte = ({ handleBackYes, etapaSim, setEtapaSim }: any) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setEtapaSim(etapaSim + 1)
    console.log(data);
    console.log("foi")
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Transporte</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">5</strong>/6
        </p>
      </div>
      <form className="transport__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="label__pattern">
          Necessita de transporte aéreo?
          <select
            className="regular__input input__transport"
            {...register("necessitaTransporteAereo", { required: true })}
          >
            <option value="">Selecione... *</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <label className="label__pattern">
          Como você planeja chegar ao evento?
          <select
            className="regular__input input__transport"
            {...register("planoChegada", { required: true })}
          >
            <option value="">Selecione... *</option>
            <option value="Transfer fornecido pelo evento (Saída do escritório Único)">
              Transfer fornecido pelo evento (Saída do escritório Único)
            </option>
            <option value="Veículo próprio">Veículo próprio</option>
          </select>
        </label>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackYes}>
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

export default Transporte;
