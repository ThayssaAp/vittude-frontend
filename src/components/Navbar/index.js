import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>Como funciona</li>
                    <li>Para você</li>
                    <li>Para psicólogos</li>
                    <li>Para empresas</li>
                    <li>Blog</li>
                </ul>
                <div className="dropdown">
                    <div className="li-dropdown">
                        <p>Olá, visitante!</p>
                        <img src="img/down-arrow.png" alt="down arrow" />
                    </div>
                    <div className="box-dropdown">
                        <p>Entre para ver seu perfil, ter acesso as suas consultas e seu beneficio corporativo</p>
                        <button className="btn-dropdown"><Link class="link-btn" to="/login">Entrar</Link></button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;