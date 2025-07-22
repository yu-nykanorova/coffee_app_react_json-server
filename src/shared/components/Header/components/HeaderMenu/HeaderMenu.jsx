import { Link } from 'react-router-dom';
import './HeaderMenu.scss';

export const HeaderMenu = ({navIsActive, navClose}) => {
  return (
    <div className={`header-menu ${navIsActive ? 'is-active' : ''}`}>
        <Link onClick={navClose} to="/">Home</Link>
        <Link onClick={navClose} to="/about">About</Link>
        <Link onClick={navClose} to="/contacts">Contact</Link>
        <span className="icon-times header-menu-close" onClick={navClose}></span>
    </div>
  );
};

