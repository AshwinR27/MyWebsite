import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header(){
    return(
        <header className="nav-header">
            <Link to="/"><img src="home/ProfileLogo.png" /></Link>
            <nav className="nav-header-elements">
                <NavLink
                    to="/"
                    end
                    className={({isActive}) => isActive? "nav-active":"nav-inactive"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="resume"
                    className={({isActive}) => isActive? "nav-active":"nav-inactive"}
                >
                    Resume
                </NavLink>
                <NavLink
                    to="certificates"
                    className={({isActive}) => isActive? "nav-active":"nav-inactive"}
                >
                    Certificates
                </NavLink>
                
            </nav>
        </header>
    )
}