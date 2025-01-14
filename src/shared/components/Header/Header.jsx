import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import "/src/shared/components/Header/Header.scss";

export const Header = ({ title }) => {
  const [navIsActive, setNavIsActive] = useState(false);

  const location = useLocation();

  if (location.pathname.includes("/auth")) {
    return null;
  }

  return (
    <div className="header">
      <div className="menu" onClick={()=> setNavIsActive(true)}>
        <span className="icon-menu"></span>
      </div>
      <div className="page-title">{ title }</div>
      <div className="user">
        <Link to="/auth" className="user-link">
          <span className="icon-coffee"></span>
        </Link>
      </div>
      {<HeaderMenu navIsActive={navIsActive} navClose={()=> setNavIsActive(false)} />}
    </div>
  );
};

