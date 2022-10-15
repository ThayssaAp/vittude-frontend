import "./Header.css";
import Navbar from "../Navbar"

const Header = () => {
    return (
        <header>
            <img src="/img/logo.png" alt="logo"/>
            <Navbar />
        </header>
    );
}

export default Header;