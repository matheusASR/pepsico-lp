import { StyledFooter } from "./style";
import PEPSICO from "../../assets/PEPSICO.jpg";
import RST from "../../assets/RST-logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="divtop__footer">
        <img className="pepsico-title" src={PEPSICO} alt="pepsico-title" />
        <p className="copyright-text">© Copyright 2023 - PepsiCo </p>
      </div>
      <div className="divbottom__footer">
        <div>
          <img className="rst__logo" src={RST} alt="rst-logo" />
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
