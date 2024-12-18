import "./Sidebar.scss";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  if (location.pathname.includes("/drink") || location.pathname.includes("/bean") || location.pathname.includes("/auth")) {
    return null;
  }

  return (
    <div className="sidebar">
      <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="sidebar-link__icon icon-home"></span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="sidebar-link__icon icon-cart"></span>
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="sidebar-link__icon icon-heart"></span>
      </NavLink>
      <NavLink to="/notification" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="sidebar-link__icon icon-bell"></span>
      </NavLink>
    </div>
  )
}

