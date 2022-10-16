import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>Como funciona</li>
                <li>Para você</li>
                <li>Para psicólogos</li>
                <li>Para empresas</li>
                <li>Blog</li>
            </ul>
            <div className="dropdown">
                <a>Olá, visitante!</a>
                <img src="img/down-arrow.png" alt="down arrow" />
            </div>
        </nav>
    );
}

export default Navbar;