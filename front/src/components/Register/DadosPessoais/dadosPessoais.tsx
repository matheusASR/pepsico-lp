import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TDadosPessoaisValues, dadosPessoaisSchema } from "./dadosPessoaisSchema";

const DadosPessoais = ({ setEtapaSim, etapaSim, setFinalFormData, finalFormData }: any) => {
  const generos = ["Masculino", "Feminino", "Outro"];
  const tamanhos = ["P", "M", "G", "GG", "EXG"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDadosPessoaisValues>({
    resolver: zodResolver(dadosPessoaisSchema),
  });

  const submitFormRegister: SubmitHandler<TDadosPessoaisValues> = async (
    formData
  ) => {
    setEtapaSim(etapaSim + 1);
    setFinalFormData({...finalFormData, ...formData})
  };

  const backBttn = (e:any) => {
    e.preventDefault()
    const formKey = "dadosPessoais";
    if (finalFormData.hasOwnProperty(formKey)) {
      const updatedFinalFormData = { ...finalFormData };
      delete updatedFinalFormData[formKey];
      setFinalFormData(updatedFinalFormData);
    }
    setEtapaSim(etapaSim - 1);
  };

  return (
    <>
      <div className="form__register__top">
        <h2 className="form__register__title">Dados Pessoais</h2>
        <p className="form__register__step">
          Step <strong className="form__register__step">3</strong>/6
        </p>
      </div>
      <form className="personal__form" onSubmit={handleSubmit(submitFormRegister)}>
        <div className="responsive__div">
          <div className="responsive__input">
            <input className="regular__input" type="text" placeholder="RG *" {...register("dadosPessoais.rg")}/>
            {errors.dadosPessoais?.rg && <p>{errors.dadosPessoais.rg.message}</p>}
            <input className="regular__input" type="text" placeholder="CPF *" {...register("dadosPessoais.cpf")}/>
            {errors.dadosPessoais?.cpf && <p>{errors.dadosPessoais.cpf.message}</p>}
            <input
              className="regular__input"
              type="text"
              placeholder="Data de Nascimento *"
              {...register("dadosPessoais.dataNascimento")}
            />
            {errors.dadosPessoais?.dataNascimento && <p>{errors.dadosPessoais.dataNascimento.message}</p>}
            <select className="regular__input" {...register("dadosPessoais.genero")}>
              <option value="">Gênero *</option>
              {generos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            {errors.dadosPessoais?.genero && <p>{errors.dadosPessoais.genero.message}</p>}
          </div>
          <div className="responsive__input">
            <select className="regular__input" {...register("dadosPessoais.tamanhoCamiseta")}>
              <option value="">Tamanho de Camiseta *</option>
              {tamanhos.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
            {errors.dadosPessoais?.tamanhoCamiseta && <p>{errors.dadosPessoais.tamanhoCamiseta.message}</p>}
            <select className="regular__input" {...register("dadosPessoais.restricaoAlimentar")}>
              <option value="">Possui alguma restrição alimentar? *</option>
              <option>Sim (Especifique)</option>
              <option>Não</option>
            </select>
            {errors.dadosPessoais?.restricaoAlimentar && <p>{errors.dadosPessoais.restricaoAlimentar.message}</p>}
            <select className="regular__input" {...register("dadosPessoais.necessidade")}>
              <option value="">Possui alguma necessidade? *</option>
              <option>Sim (Especifique)</option>
              <option>Não</option>
            </select>
            {errors.dadosPessoais?.necessidade && <p>{errors.dadosPessoais.necessidade.message}</p>}
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
