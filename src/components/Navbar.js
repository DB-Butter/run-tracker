import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar(props) {
    return (
        <nav className="navbar">
            <a className="icon" href="https://github.com/DB-Butter/run-tracker"><IconContext.Provider value={{color:'goldenrod', size: "3rem"}}><FaGithub /></IconContext.Provider></a>
            <ul className="navbar-list">
                <li className="list-item">
                    <Link to="/" className="nav-links">Excercises</Link>    
                </li>
                <div className="vr"/>
                <li className="list-item">
                    <Link to="/create" className="nav-links">Create Log</Link>    
                </li>
                <div className="vr"/>
                <li className="list-item">
                    <Link to="/user" className="nav-links">Create User</Link>    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;