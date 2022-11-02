import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <figure>
                    <img src="https://i.pinimg.com/originals/2f/db/dd/2fdbdd745f525929d827b5d26da8be28.jpg" alt="Logo Tim Burton" />
            </figure>
            <ul>
                <li className="li">
                    <NavLink to="">Home</NavLink>
                </li>
                <li className="li">
                    <NavLink to="/moviesGallery">Gallery</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;