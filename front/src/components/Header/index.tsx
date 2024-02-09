import { StyledHeader } from "./style"
import PEPSICO from "../../assets/PEPSICO.jpg"
import MenuLines from "../../assets/menu-lines.jpg"

const Header = () => {
    return (
        <StyledHeader>
            <div className="div__header">
                <img className="pepsico-title" src={PEPSICO} alt="pepsico-title" />
                <div className="menu-lines-box"><img className="menu-lines" src={MenuLines} alt="menu-lines" /></div>
            </div>
        </StyledHeader>
    )
}

export default Header;