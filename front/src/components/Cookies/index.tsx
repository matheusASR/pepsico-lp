import { useState } from "react";
import { StyledCookies } from "./style";
import COOKIEIMG from "../../assets/COOKIEIMG.png";

const Cookies = () => {
  const [openCookies, setOpenCookies] = useState(false);

  const handleCookies = () => {
    setOpenCookies(false);
  };

  return (
    <StyledCookies>
      <img
        onClick={() => setOpenCookies(!openCookies)}
        className="cookies__img"
        src={COOKIEIMG}
        alt="cookies-img"
      />
      {openCookies ? (
        <div className="cookies__box">
          <div className="divtop__cookies">
            <p className="grey">Control your privacy</p>
            <a
              target="blank"
              href="https://goadopt.io/porque-aviso/?source=firstLevel"
              className="grey"
            >
              AdOpt
            </a>
          </div>
          <p className="orange">
            Our website uses cookies to improve navigation.
          </p>
          <p className="grey">
            -{" "}
            <a
              className="grey underline"
              target="blank"
              href="https://dash.goadopt.io/opt-out?websiteId=07ba9209-7956-4739-b72c-4e40ec372844&id=621df775-d6cc-4f69-a265-fc74f96baa8f&visitorId=d142fdbb-ba22-42d8-98d9-febd8b6230be"
            >
              Opt-out
            </a>
          </p>
          <div className="divbottom__cookies">
            <button className="orange underline">My options</button>
            <button onClick={handleCookies} className="reject__bttn">
              Rejeitar
            </button>
            <button onClick={handleCookies} className="accept__bttn">
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </StyledCookies>
  );
};

export default Cookies;
