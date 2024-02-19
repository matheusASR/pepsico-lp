import { StyledHeader } from "./style";
import PEPSICO from "../../assets/PEPSICO.jpg";
import MenuLines from "../../assets/menu-lines.jpg";
import { useState } from "react";
import XCLOSE from "../../assets/XCLOSE.png";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => {
    setMenuBar(true);
  };

  const closeMenuBar = () => {
    setMenuBar(false);
  };

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
    <StyledHeader>
      {menuBar ? (
        <>
          <div className="div__header">
            <img
              onClick={openMenuBar}
              className="pepsico-title"
              src={PEPSICO}
              alt="pepsico-title"
            />
            <div onClick={closeMenuBar} className="menu-lines-box">
              <img className="x__close" src={XCLOSE} alt="x__close__btn" />
            </div>
          </div>
          <div className="div__header__menu">
            <button
              onClick={() => scrollToSection("section1")}
              className="pattern__style"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("section2")}
              className="pattern__style"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("section3")}
              className="pattern__style"
            >
              Inscrição
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="div__header">
            <img className="pepsico-title" src={PEPSICO} alt="pepsico-title" />
            <div onClick={openMenuBar} className="menu-lines-box">
              <img className="menu-lines" src={MenuLines} alt="menu-lines" />
            </div>
            <div className="menu__header__desktop">
              <button
                onClick={() => scrollToSection("section1")}
                className="pattern__style2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("section2")}
                className="pattern__style2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("section3")}
                className="pattern__style2"
              >
                Inscrição
              </button>
            </div>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
