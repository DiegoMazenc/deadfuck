import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <div class="barnav">
            <div class="nav">
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/Music"><li>MUSIC</li></Link>
                    <Link to="/Bio"><li>BIO</li></Link>
                    <Link to="/Press"><li>PRESS</li></Link>
                    <Link to="/Contact"> <li>CONTACT</li></Link>
                    <a href="https://deadfuck.bandcamp.com/merch" target="_blank"><li class="merchbtn">SHOP</li></a>
                </ul>
            </div>
        </div>

    </header>
            
    )
}

export default Header;
