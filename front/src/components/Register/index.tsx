import { useState } from "react";
import { StyledRegister } from "./style";
import DadosPessoais from "./dadosPessoais";
import DadosContato from "./dadosContato";
import DadosPepsicoNao from "./dadosPepsicoNao";
import DadosPepsicoSim from "./dadosPepsicoSim";
import Declinio from "./declinio";
import DuvidasSugestoes from "./duvidasSugestoes";
import Transporte from "./transporte";
import Confirmacao from "./confirmacao";

const Register = () => {
  const [confirmacao, setConfirmacao] = useState("");
  const [step, setStep] = useState(3);
  const [etapaSim, setEtapaSim] = useState(1);
  const [etapaNao, setEtapaNao] = useState(1);

  const handleConfirmacaoSubmit = (e: any) => {
    e.preventDefault();
    if (confirmacao === "Sim") {
      setEtapaSim(2);
    } else {
      setEtapaNao(2);
    }
  };

  const handleNextYes = (e: any) => {
    e.preventDefault();
    setEtapaSim(etapaSim + 1);
  };

  const handleNextNo = (e: any) => {
    e.preventDefault();
    setEtapaNao(etapaNao + 1);
  };

  const handleBackYes = (e: any) => {
    e.preventDefault();
    setEtapaSim(etapaSim - 1);
  };

  const handleBackNo = (e: any) => {
    e.preventDefault();
    setEtapaNao(etapaNao - 1);
  };

  return (
    <StyledRegister>
      <div className="register__title__box">
        <h1 className="register__title">Inscreva-se</h1>
      </div>
      <div
        className="form__register__box"
      >
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
            handleNextYes={handleNextYes}
            handleBackYes={handleBackYes}
          />
        )}

        {etapaSim === 3 && (
          <DadosPessoais
            handleNextYes={handleNextYes}
            handleBackYes={handleBackYes}
          />
        )}

        {etapaSim === 4 && (
          <DadosContato
            handleNextYes={handleNextYes}
            handleBackYes={handleBackYes}
          />
        )}

        {etapaSim === 5 && (
          <Transporte
            handleNextYes={handleNextYes}
            handleBackYes={handleBackYes}
          />
        )}

        {etapaSim === 6 && <DuvidasSugestoes handleBackYes={handleBackYes} />}

        {etapaNao === 2 && (
          <DadosPepsicoNao
            handleNextNo={handleNextNo}
            handleBackNo={handleBackNo}
          />
        )}

        {etapaNao === 3 && <Declinio handleBackNo={handleBackNo} />}
      </div>
    </StyledRegister>
  );
};

export default Register;
