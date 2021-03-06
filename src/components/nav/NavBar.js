import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/games">
                    Games
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">
                    NavItem2
                </Link>
            </li>
            <li className="navbar__item">
                NavItem3
            </li>
            {
                (localStorage.getItem("gr_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("gr_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}