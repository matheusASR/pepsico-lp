import { useEffect, useState } from "react";
import { StyledRegister } from "./style";
import DadosPessoais from "./DadosPessoais/dadosPessoais";
import DadosContato from "./DadosContato/dadosContato";
import DadosPepsicoNao from "./DadosPepsico/Nao/dadosPepsicoNao";
import DadosPepsicoSim from "./DadosPepsico/Sim/dadosPepsicoSim";
import Declinio from "./declinio";
import DuvidasSugestoes from "./duvidasSugestoes";
import Transporte from "./transporte";
import Confirmacao from "./confirmacao";

const Register = () => {
  const [confirmacao, setConfirmacao] = useState("");
  const [step, setStep] = useState(3);
  const [etapaSim, setEtapaSim] = useState(1);
  const [etapaNao, setEtapaNao] = useState(1);
  const [finalFormData, setFinalFormData] = useState({});

  useEffect(() => {
    console.log(finalFormData);
  }, [finalFormData]);

  const handleConfirmacaoSubmit = (e: any) => {
    e.preventDefault();
    if (confirmacao === "Sim") {
      setEtapaSim(2);
      setFinalFormData({
        confirmacao: "Sim"
      })
      console.log(finalFormData)
    } else {
      setEtapaNao(2);
      setFinalFormData({
        confirmacao: "Não"
      })
    }
  };

  return (
    <StyledRegister id="section3">
      <div className="register__title__box">
        <h1 className="register__title">Inscreva-se</h1>
      </div>
      <div className="form__register__box">
        {etapaSim === 1 && etapaNao === 1 ? (
          <Confirmacao
            handleConfirmacaoSubmit={handleConfirmacaoSubmit}
            step={step}
            setStep={setStep}
            confirmacao={confirmacao}
            setConfirmacao={setConfirmacao}
          />
        ) : null}

        {etapaSim === 2 && (
          <DadosPepsicoSim
            setEtapaSim={setEtapaSim}
            etapaSim={etapaSim}
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}

        {etapaSim === 3 && (
          <DadosPessoais
            setEtapaSim={setEtapaSim}
            etapaSim={etapaSim}
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}

        {etapaSim === 4 && (
          <DadosContato
            setEtapaSim={setEtapaSim}
            etapaSim={etapaSim}
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}

        {etapaSim === 5 && (
          <Transporte
            setEtapaSim={setEtapaSim}
            etapaSim={etapaSim}
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}

        {etapaSim === 6 && (
          <DuvidasSugestoes
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
            setEtapaSim={setEtapaSim}
            etapaSim={etapaSim}
          />
        )}

        {etapaNao === 2 && (
          <DadosPepsicoNao
            setEtapaNao={setEtapaNao}
            etapaNao={etapaNao}
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}

        {etapaNao === 3 && (
          <Declinio
            setFinalFormData={setFinalFormData}
            finalFormData={finalFormData}
          />
        )}
      </div>
    </StyledRegister>
  );
};

export default Register;
