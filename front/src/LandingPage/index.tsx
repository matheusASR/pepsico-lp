import Header from "../components/Header";
import { StyledLandingPage } from "./style";
import PepsicoBigImage from "../assets/pepsico-img-big.jpg"
import About from "../components/About";
import Register from "../components/Register";
import Footer from "../components/Footer";

const LandingPage = () => {
    const scrollToSection = (id: any) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = 100;
          const targetY =
            section.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            behavior: "smooth",
            top: targetY,
          });
        }
      };

    return (
        <StyledLandingPage>
            <Header/>
            <img id="section1" className="pepsico-big-banner" src={PepsicoBigImage} alt="pepsico-banner" />
            <About/>
            <Register/>
            <button onClick={() => scrollToSection("section1")} className="gotop__bttn">*</button>
            <Footer/>
        </StyledLandingPage>
    )
}

export default LandingPage;