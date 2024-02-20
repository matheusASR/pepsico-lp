import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TDadosPepsicoSimValues,
  dadosPepsicoSimSchema,
} from "./dadosPepsicoSimSchema";

const DadosPepsicoSim = ({ handleBackYes, setEtapaSim, etapaSim }: any) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDadosPepsicoSimValues>({
    resolver: zodResolver(dadosPepsicoSimSchema),
  });

  const submitFormRegister: SubmitHandler<TDadosPepsicoSimValues> = async (
    formData
  ) => {
    setEtapaSim(etapaSim + 1);
    console.log("foi");
    console.log(formData);
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pepsico</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">2</strong>/6
        </p>
      </div>
      <form
        className="pepsico__form"
        onSubmit={handleSubmit(submitFormRegister)}
      >
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Nome Completo *"
              {...register("dadosPepsicoSim.nomeCompleto")}
            />
            {errors.dadosPepsicoSim?.nomeCompleto && <p>{errors.dadosPepsicoSim.nomeCompleto.message}</p>}
            <input
              className="regular__input"
              type="text"
              placeholder="GPID *"
              {...register("dadosPepsicoSim.gpid")}
            />
            {errors.dadosPepsicoSim?.gpid && <p>{errors.dadosPepsicoSim.gpid.message}</p>}
            <input
              className="regular__input"
              type="text"
              placeholder="E-mail *"
              {...register("dadosPepsicoSim.email")}
            />
            {errors.dadosPepsicoSim?.email && <p>{errors.dadosPepsicoSim.email.message}</p>}
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Departamento *"
              {...register("dadosPepsicoSim.departamento")}
            />
            {errors.dadosPepsicoSim?.departamento && <p>{errors.dadosPepsicoSim.departamento.message}</p>}
            <select className="regular__input" {...register("dadosPepsicoSim.regiao")}>
              <option value="">Região*</option>
              {opcoesRegiao.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            {errors.dadosPepsicoSim?.regiao && <p>{errors.dadosPepsicoSim.regiao.message}</p>}
            <select className="regular__input" {...register("dadosPepsicoSim.nivel")}>
              <option value="">Nível*</option>
              {todasOpcoes.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            {errors.dadosPepsicoSim?.nivel && <p>{errors.dadosPepsicoSim.nivel.message}</p>}
          </div>
        </div>
        <div className="div__bttns">
          <button className="back__bttn" onClick={handleBackYes}>
            VOLTAR
          </button>
          <button
            type="submit"
            className="continue__bttn"
          >
            CONTINUAR
          </button>
        </div>
      </form>
    </>
  );
};

export default DadosPepsicoSim;
