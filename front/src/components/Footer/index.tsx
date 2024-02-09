import { StyledFooter } from "./style";
import PEPSICO from "../../assets/PEPSICO.jpg";
import RST from "../../assets/RST-logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img src={PEPSICO} alt="pepsico-title" />
        <p>© Copyright 2023 - PepsiCo </p>
      </div>
      <div>
        <div>
          <img src={RST} alt="rst-logo" />
          <p>Plataforma de transmissão completa de eventos.</p>
        </div>
        <div>
          <p>Problemas com a conexão / áudio ?</p>
          <a href="https://rstcom.live/faq/rstcom/" target="_blank">
            Clique aqui
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
