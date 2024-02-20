import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TDadosContatoValues, dadosContatoSchema } from "./dadosContatoSchema";

const DadosContato = ({ etapaSim, setEtapaSim, handleBackYes }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDadosContatoValues>({
    resolver: zodResolver(dadosContatoSchema),
  });

  const submitFormRegister: SubmitHandler<TDadosContatoValues> = async (
    formData
  ) => {
    setEtapaSim(etapaSim + 1);
    console.log("foi");
    console.log(formData);
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados de Contato</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">4</strong>/6
        </p>
      </div>
      <form className="contact__form" onSubmit={handleSubmit(submitFormRegister)}>
        <div className="responsive__div">
          <div className="responsive__input contact1">
            <input
              className="regular__input"
              type="number"
              placeholder="CEP *"
              {...register("dadosContato.cep")}
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Endereço *"
              {...register("dadosContato.endereco")}
            />
            <div className="num__comp">
              <input
                className="regular__input number"
                type="number"
                placeholder="Número *"
                {...register("dadosContato.numero")}
              />
              <input
                className="regular__input comp"
                type="text"
                placeholder="Complemento"
                {...register("dadosContato.complemento")}
              />
            </div>
            <input
              className="regular__input"
              type="text"
              placeholder="Bairro *"
              {...register("dadosContato.bairro")}
            />
            <input
              className="regular__input"
              type="text"
              placeholder="Cidade *"
              {...register("dadosContato.cidade")}
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Estado *"
              {...register("dadosContato.estado")}
            />
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para contato *"
              {...register("dadosContato.telefoneContato")}
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
            <input
              className="regular__input"
              type="text"
              placeholder="Contato de Emergência *"
              {...register("dadosContato.contatoEmergencia")}
            />
            <span className="span__contact">
              Ex:. Nome completo (Parentesco)
            </span>
            <input
              className="regular__input"
              type="number"
              placeholder="Telefone para emergência *"
              {...register("dadosContato.telefoneEmergencia")}
            />
            <span className="span__contact">
              Digite apenas números incluindo o DDD
            </span>
          </div>
        </div>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackYes}>
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
