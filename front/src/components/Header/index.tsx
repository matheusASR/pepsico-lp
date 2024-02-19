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

          </div>
        </>
      ) : (
        <>
          <div className="div__header">
            <img className="pepsico-title" src={PEPSICO} alt="pepsico-title" />
            <div onClick={openMenuBar} className="menu-lines-box">
              <img className="menu-lines" src={MenuLines} alt="menu-lines" />
            </div>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
