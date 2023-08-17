import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
        
        <header>
        <div className="barnav">
            <div className="nav">
                <ul>
                    <Link to="/" onClick={handleLinkClick}><li>HOME</li></Link>
                    <Link to="/Music" onClick={handleLinkClick}><li>MUSIC</li></Link>
                    <Link to="/Bio" onClick={handleLinkClick}><li>BIO</li></Link>
                    <Link to="/Press" onClick={handleLinkClick}><li>PRESS</li></Link>
                    <Link to="/Contact" onClick={handleLinkClick}> <li>CONTACT</li></Link>
                    <a href="https://deadfuck.bandcamp.com/merch" target="_blank"><li className="merchbtn">SHOP</li></a>
                </ul>
            </div>
        </div>

    </header>
            
    )
}

export default Header;
