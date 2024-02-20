import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TDadosPepsicoNaoValues, dadosPepsicoNaoSchema } from "./dadosPepsicoNaoSchema";

const DadosPepsicoNao = ({ setEtapaNao, etapaNao, setFinalFormData, finalFormData }: any) => {
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

  const backBttn = (e: any) => {
    e.preventDefault()
    const formKey = "dadosPepsicoNao";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaNao(etapaNao - 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDadosPepsicoNaoValues>({
    resolver: zodResolver(dadosPepsicoNaoSchema),
  });

  const submitFormRegister: SubmitHandler<TDadosPepsicoNaoValues> = async (
    formData
  ) => {
    setEtapaNao(etapaNao + 1);
    setFinalFormData({...finalFormData, ...formData})
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pepsico</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">2</strong>/3
        </p>
      </div>
      <form className="pepsico__form" onSubmit={handleSubmit(submitFormRegister)}>
        <div className="responsive__div">
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Nome Completo *"
              {...register("dadosPepsicoNao.nomeCompleto")}
            />
            <input
              className="regular__input"
              type="text"
              placeholder="GPID *"
              {...register("dadosPepsicoNao.gpid")}
            />
            <input
              className="regular__input"
              type="text"
              placeholder="E-mail *"
              {...register("dadosPepsicoNao.email")}
            />
          </div>
          <div className="responsive__input">
            <input
              className="regular__input"
              type="text"
              placeholder="Departamento *"
              {...register("dadosPepsicoNao.departamento")}
            />
            <select className="regular__input" {...register("dadosPepsicoNao.regiao")}>
              <option value="">Região*</option>
              {opcoesRegiao.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            <select className="regular__input" {...register("dadosPepsicoNao.nivel")}>
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

export default DadosPepsicoNao;
