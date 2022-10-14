import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="list-item">
                    <Link to="/" className="nav-link">Excercises</Link>    
                </li>
                <li className="list-item">
                    <Link to="/create" className="nav-link">Create Excercise Log</Link>    
                </li>
                <li className="list-item">
                    <Link to="/user" className="nav-link">Create User</Link>    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;