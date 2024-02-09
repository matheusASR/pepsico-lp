import { StyledAbout } from "./style";
import PepsicoSmallBanner from "../../assets/pepsico-img-small.jpg"

const About = () => {
  return (
    <StyledAbout>
      <div>
        <h1>Bem-Vindo à Convenção Giga X da Pepsico!</h1>
        <p>
          Agradecemos por participar deste evento incrível. Sua presença é
          essencial para tornar a Giga X uma experiência memorável! Antes de
          começarmos essa jornada, pedimos que preencha o formulário abaixo para
          personalizarmos a sua experiência. Certifique-se de aceitar os termos
          da LGPD para prosseguir. Estamos aqui para tornar a Giga X
          inesquecível para você. Contamos com a sua colaboração e mal podemos
          esperar para encontrá-lo(a) no evento!
        </p>
        <p>
          <strong>IMPORTANTE:</strong>O prazo final para confirmação de presença
          e preenchimento dos dados é no dia
          <strong>XX/XX/2024.</strong>
        </p>
      </div>
      <img className="pepsico__small__banner" src={PepsicoSmallBanner} alt="pepsico-small-banner" />
    </StyledAbout>
  );
};

export default About;
