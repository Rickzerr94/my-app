import { Link } from "react-router-dom";

import './header.css'

const Header = () => {
    return <header>
        <h2>My junk</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="todolist">To-do list</Link></li>
            <li><Link to="emojies">Emogies</Link></li>
            <li><Link to="userslist">Users list</Link></li>
        </ul>
    </header>
};

export default Header