import logo from "../images/react-icon-small.png"
import "../styles.css"

const NavBar = () => {
    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="react logo" />
            <h3 className="logo-header">ReactFacts</h3>
            <h4 className="project-header">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar