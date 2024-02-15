import { useState } from "react";
import { StyledRegister } from "./style";
import DadosPessoais from "./dadosPessoais";
import DadosContato from "./dadosContato";
import DadosPepsicoNao from "./dadosPepsicoNao";
import DadosPepsicoSim from "./dadosPepsicoSim";

const Register = () => {
  const [confirmacao, setConfirmacao] = useState("");
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

  const handleNextYes = () => {
    setEtapaSim(etapaSim + 1);
  };

  const handleNextNo = () => {
    setEtapaNao(etapaNao + 1);
  };

  const handleBackYes = () => {
    setEtapaSim(etapaSim - 1);
  };

  const handleBackNo = () => {
    setEtapaNao(etapaNao - 1);
  };

  return (
    <StyledRegister>
      {etapaSim === 1 && etapaNao === 1 ? (
        <>
          <h1>Inscreva-se</h1>
          <h2>Confirmação de Presença</h2>
          <form onSubmit={handleConfirmacaoSubmit}>
            <label>
              Você confirma a sua presença no evento?
              <select
                name="confirmacao"
                value={confirmacao}
                onChange={(e) => {
                  setConfirmacao(e.target.value);
                }}
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </label>
            <button type="submit">CONTINUAR</button>
          </form>
        </>
      ) : null}

      {etapaSim === 2 && (
        <DadosPepsicoSim handleNextYes={handleNextYes} handleBackYes={handleBackYes} />
      )}

      {etapaSim === 3 && (
        <DadosPessoais handleNextYes={handleNextYes} handleBackYes={handleBackYes} />
      )}

      {etapaSim === 4 && (
        <DadosContato handleNextYes={handleNextYes} handleBackYes={handleBackYes} />
      )}

      {etapaSim === 5 && (
        <>
          <h1>Transporte</h1>
          <form>
            <label>
              Necessita de transporte aéreo?
              <select>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </label>
          </form>
          <div>
            <button onClick={handleBackYes}>VOLTAR</button>
            <button onClick={handleNextYes}>CONTINUAR</button>
          </div>
        </>
      )}

      {etapaSim === 6 && (
        <>
          <h1>Dúvidas ou Sugestões</h1>
          <h2>Use este campo para:</h2>
          <span>Sugerir colega de quarto</span>
          <span>Dúvidas ou Sugestões</span>
          <form>
            <input type="textarea" />
            <p>
              Declaro que concordo com as Política de Privacidade RSTCom e
              Termos e Condições de Uso RSTCom
            </p>
          </form>
          <div>
            <button onClick={handleBackYes}>VOLTAR</button>
            <button>INSCREVER-SE</button>
          </div>
        </>
      )}

      {etapaNao === 2 && (
        <DadosPepsicoNao handleNextNo={handleNextNo} handleBackNo={handleBackNo} />
      )}

      {etapaNao === 3 && (
        <>
          <h1>Motivo</h1>
          <form>
            <label>Informe o motivo do declínio. *</label>
            <input type="textarea" />
          </form>
          <div>
            <button onClick={handleBackNo}>VOLTAR</button>
            <button>INSCREVER-SE</button>
          </div>
        </>
      )}
    </StyledRegister>
  );
};

export default Register;
