import { NavLink } from "react-router-dom"

export const BackArrow = () => {

    return (
        <NavLink to="/" className="icon-container">
            <span className="icon-chevron-left"></span>
        </NavLink>
    )
}
