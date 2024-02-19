import { StyledAbout } from "./style";
import PepsicoSmallBanner from "../../assets/pepsico-img-small.jpg";

const About = () => {
  return (
    <StyledAbout id="section2">
      <div className="div__about">
        <h1 className="title__about">
          Chegou a hora de dar mais um grande passo no mercado.
        </h1>
        <p className="text__about">
          A <strong className="strong text__about">Convenção GIGA X</strong>{" "}
          será o momento de fazer uma{" "}
          <strong className="strong text__about">
            imersão total em nossos negócios
          </strong>{" "}
          , além de uma excelente oportunidade para trocar ideias e experiências
          com profissionais gigantes iguais a você. Com um conteúdo voltado para
          a{" "}
          <strong className="strong text__about">
            inteligência de dados e inovação
          </strong>{" "}
          , vamos potencializar nossos pilares:
        </p>
        <p className="important__about">
          <strong className="strong text__about">EXPERIÊNCIA</strong> para
          descobrir novos canais de vendas.<br></br>
          <strong className="strong text__about">EXCELÊNCIA</strong> para
          encantar os clientes.<br></br>
          <strong className="strong text__about">EXECUÇÃO</strong> para
          implementar nossos resultados.<br></br>
          <br></br>
          Por isso,{" "}
          <strong className="strong text__about">
            inscreva-se agora mesmo
          </strong>{" "}
          e garanta sua participação.
        </p>
      </div>
      <img
        className="pepsico__small__banner"
        src={PepsicoSmallBanner}
        alt="pepsico-small-banner"
      />
    </StyledAbout>
  );
};

export default About;
