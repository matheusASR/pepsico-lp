import Header from "../components/Header";
import { StyledLandingPage } from "./style";
import PepsicoBigImage from "../assets/pepsico-img-big.jpg"
import About from "../components/About";
import Register from "../components/Register";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <Header/>
            <img className="pepsico-big-banner" src={PepsicoBigImage} alt="pepsico-banner" />
            <About/>
            <Register/>
            <Footer/>
        </StyledLandingPage>
    )
}

export default LandingPage;