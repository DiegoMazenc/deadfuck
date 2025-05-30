import React from 'react';
import logotrans from '../img/Logo_v2_transparent.png';
import pochettevc from '../img/pochette-40x40.jpg';
import pochettecharlatan from '../img/pochette 3-3.jpg';
import pochettehumanite from '../img/Pochette_humanité.jpg';
import pochetteaffliction from '../img/Pochette Affliction.jpg';
import bandcamprond from '../img/Bandcamp-rond.png';
import youtuberond from '../img/youtube-rond.png';
import spotifyrond from '../img/spotify-rond..png';
import deezerrond from '../img/deezer-rond..png';
import itunesrond from '../img/itunes-rond..png';
import amazonrond from '../img/amazon-rond..png';
import '../styles/Music.css';

const Music = () => {
    return (
        <div>
            <section>
                <div className="margintop"></div>
                <div className="banniere2">
                    <img src={logotrans} alt="" />
                </div>
            </section>


            
        <article>
        <div className="article1">
            <div className="article1top">
                <img src={pochettevc} alt="" />
                <div className="article1toptext">
                    <h3>VALEUR CHAIR</h3>
                    <p>Album | Released September 10th 2023</p>
                    <hr />
                    <div className="article1liens">
                        <a href="https://deadfuck.bandcamp.com/album/valeur-chair" target="_blank"><img src={bandcamprond} alt="" /></a>
                        <a href="https://www.youtube.com/watch?v=6UkNzZkqG7Y&list=PLej_KM65LLo673y9axpFwh5A-8GXhpYeY&ab_channel=DeadfuckOfficiel" target="_blank"><img src={youtuberond} alt="" /></a>
                        <a href="https://open.spotify.com/intl-fr/album/3k0s2U673R6SlhwhaTkako" target="_blank"><img src={spotifyrond} alt="" /></a>
                        <a href="https://www.deezer.com/fr/album/469461045" target="_blank"><img src={deezerrond} alt="" /></a>
                        <a href="https://music.apple.com/us/album/b%C3%A9tail-feat-matthieu-from-festering-process-single/1699609872" target="_blank"><img src={itunesrond} alt="" /></a>
                        <a href="https://www.amazon.fr/music/player/albums/B0CCYXFJ2F" target="_blank"><img src={amazonrond} alt="" /></a>

                    </div>
                </div>
            </div>
            <div className="article1bottom">
                <div className="lienclip">
                    <iframe width="560" height="352" src="https://www.youtube.com/embed/uy7ggbsy5RQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="lienspotify">
                <iframe  src="https://open.spotify.com/embed/album/3k0s2U673R6SlhwhaTkako?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </article> 

            <article>
                <div className="article1">
                    <div className="article1top article2top">
                        <div className="article1toptext">
                            <h3>CHARLATAN</h3>
                            <p>EP | Released May 25th 2022</p>
                            <hr />
                            <div className="article1liens">
                                <a href="https://deadfuck.bandcamp.com/album/charlatan" target="_blank"><img src={bandcamprond} alt="" /></a>
                                <a href="https://www.youtube.com/watch?v=Qy185RsYqGg&list=PLej_KM65LLo6L1NR-cCQQnqj8FXjIb8cf&ab_channel=DeadfuckOfficiel" target="_blank"><img src={youtuberond} alt="" /></a>
                                <a href="https://open.spotify.com/intl-fr/album/46NkkCrhmiQQjKicMGm8aL" target="_blank"><img src={spotifyrond} alt="" /></a>
                                <a href="https://www.deezer.com/fr/album/327258467" target="_blank"><img src={deezerrond} alt="" /></a>
                                <a href="https://music.apple.com/us/album/charlatan-single/1629520085" target="_blank"><img src={itunesrond} alt="" /></a>
                                <a href="https://www.amazon.fr/music/player/albums/B0B3ZYQJJ7" target="_blank"><img src={amazonrond} alt="" /></a>

                            </div>
                        </div>
                        <img src={pochettecharlatan} alt="" />
                    </div>
                    <div className="article1bottom article2top">
                        <div className="lienspotify">
                            <iframe src="https://open.spotify.com/embed/album/46NkkCrhmiQQjKicMGm8aL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="lienclip">
                            <iframe width="560" height="352" src="https://www.youtube.com/embed/Qy185RsYqGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className="article1">
                    <div className="article1top">
                        <img src={pochettehumanite} alt="" />
                        <div className="article1toptext">
                            <h3>#HUMANITÉ</h3>
                            <p>Album | Released March 8th 2020</p>
                            <hr />
                            <div className="article1liens">
                                <a href="https://deadfuck.bandcamp.com/album/humanit" target="_blank"><img src={bandcamprond} alt="" /></a>
                                <a href="https://www.youtube.com/watch?v=q7r5egutt1Y&list=PLej_KM65LLo5CT_1u2duTrIGG7pBoVJNz&ab_channel=DeadfuckOfficiel" target="_blank"><img src={youtuberond} alt="" /></a>
                                <a href="https://open.spotify.com/intl-fr/album/4zwfPO3Qh921zQd9b8k0Z6" target="_blank"><img src={spotifyrond} alt="" /></a>
                                <a href="https://www.deezer.com/fr/album/136169612" target="_blank"><img src={deezerrond} alt="" /></a>
                                <a href="https://music.apple.com/us/album/humanit%C3%A9/1502676832" target="_blank"><img src={itunesrond} alt="" /></a>
                                <a href="https://www.amazon.fr/music/player/albums/B085VDSG8C" target="_blank"><img src={amazonrond} alt="" /></a>

                            </div>
                        </div>
                    </div>
                    <div className="article1bottom">
                        <div className="lienclip">
                            <iframe width="560" height="352" src="https://www.youtube.com/embed/zKLWpMpcLiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="lienspotify">

                            <iframe src="https://open.spotify.com/embed/album/4zwfPO3Qh921zQd9b8k0Z6?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className="article1">
                    <div className="article1top article2top">
                        <div className="article1toptext">
                            <h3>AFFLICTION</h3>
                            <p>EP | Released September 18th 2018</p>
                            <hr />
                            <div className="article1liens">
                                <a href="https://deadfuck.bandcamp.com/album/affliction" target="_blank"><img src={bandcamprond} alt="" /></a>
                                <a href="https://www.youtube.com/watch?v=6TNmG-5aqQM&ab_channel=DeadfuckOfficiel" target="_blank"><img src={youtuberond} alt="" /></a>
                                <a href="https://open.spotify.com/intl-fr/album/5SqgoFOidPZPWRPFXJ0Z7l" target="_blank"><img src={spotifyrond} alt="" /></a>
                                <a href="https://www.deezer.com/fr/album/124720212" target="_blank"><img src={deezerrond} alt="" /></a>
                                <a href="https://music.apple.com/us/album/affliction-ep/1493076988" target="_blank"><img src={itunesrond} alt="" /></a>
                                <a href="https://www.amazon.fr/music/player/albums/B083G77TSX" target="_blank"><img src={amazonrond} alt="" /></a>

                            </div>
                        </div>
                        <img src={pochetteaffliction} alt="" />
                    </div>
                    <div className="article1bottom article2top">
                        <div className="lienspotify">
                            <iframe src="https://open.spotify.com/embed/album/5SqgoFOidPZPWRPFXJ0Z7l?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="lienclip">
                            <iframe width="560" height="352" src="https://www.youtube.com/embed/hXm2CMnKUM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Music;