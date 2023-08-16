import '../styles/Footer.css';
import bandcamprond from '../img/Bandcamp-rond.png';
import youtuberond from '../img/youtube-rond.png';
import spotifyrond from '../img/spotify-rond..png';
import deezerrond from '../img/deezer-rond..png';
import itunesrond from '../img/itunes-rond..png';
import facebookrond from '../img/facebook-rond.png';
import instagramrond from '../img/instagram-rond.png';
import logotrans from '../img/Logo_v2_transparent.png';
import fbdg from '../img/logoFBDG trsprt.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
        <div className="footer">
            <div className="topfooter">
                <div className="topfooter1">
                    <img src={logotrans} alt="" />
                </div>
                <div className="topfooter2">
                    <div className="reseaux">
                        <a href="https://deadfuck.bandcamp.com/"  target="_blank"><img src={bandcamprond} alt="" /></a>
                        <a href="https://www.youtube.com/channel/UC2mL2_kz8UbNCkzMnWkEZow" target="_blank"><img src={youtuberond} alt="" /></a>
                        <a href="https://open.spotify.com/intl-fr/artist/0P4xou5C1LYCBh9wKEWSjg"  target="_blank"><img src={spotifyrond} alt="" /></a>
                        <a href="https://music.apple.com/us/artist/deadfuck/1492717287"  target="_blank"><img src={itunesrond} alt="" /></a>
                        <a href="https://www.deezer.com/fr/artist/81981662"  target="_blank"><img src={deezerrond} alt="" /></a>
                        <a href="https://www.facebook.com/deadfckband/"  target="_blank"><img src={facebookrond} alt="" /></a>
                        <a href="https://www.instagram.com/deadfuck.official/"  target="_blank"><img src={instagramrond} alt="" /></a>
                    </div>
                    <div className="Topfooter2under1">
                        <h6>Contact</h6>
                        <p>deadf.booking@gmail.com</p>
                    </div>
                    <div className="Topfooter2under2">
                        <h6>Distribution</h6>
                        <p>france.black.death.grind@gmail.com</p>
                    </div>
                </div>
                <div className="topfooter3">
                    <h6>Navigation</h6>
                    <div className="liensnav">
                        <ul>
                        <Link to="/"><li>Home</li></Link>
                    <Link to="/Music"><li>Music</li></Link>
                    <Link to="/Bio"><li>Bio</li></Link>
                    <Link to="/Press"><li>Press</li></Link>
                    <Link to="/Contact"> <li>Contact</li></Link>
                    <a href="https://deadfuck.bandcamp.com/merch" target="_blank"><li className="merchbtn">Shop</li></a>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="bottomfooter">
                <img src={fbdg} alt="" />
                <p>Website by Diégo Mazenc</p>
                <p>©deadfuck, 2023 all rights reserved</p>
            </div>

        </div>
    </footer>
            
    )
}

export default Footer;