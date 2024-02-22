import { StyledFooter } from "./style";
import PEPSICO from "../../assets/PEPSICO.jpg";
import RST from "../../assets/RST-logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="divtop__footer">
        <img className="pepsico-title" src={PEPSICO} alt="pepsico-title" />
        <div className="div__divtop__footer">
          <p className="footer__text">Em caso de dúvidas contato nossa RSVP</p>
          <a
            className="doubt__contact"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5511997759828"
            target="_blank"
          >
            Dúvidas sobre o evento? <br></br>
            <span className="doubt__contact underline">
              WhatsApp: (11) 99775-9828
            </span>
          </a>
          <p className="copyright-text">© Copyright 2024 - PepsiCo </p>{" "}
        </div>
      </div>
      <div className="divbottom__footer">
        <div>
          <img className="rst__logo" src={RST} alt="rst-logo" />
          <p>Plataforma de transmissão completa de eventos.</p>
        </div>
        <div>
          <p>Problemas com a conexão / áudio ?</p>
          <a
            className="click__here"
            href="https://rstcom.live/faq/rstcom/"
            target="_blank"
          >
            Clique aqui
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
