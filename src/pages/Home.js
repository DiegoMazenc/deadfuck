import bannierevc from '../img/BanniereVC.jpg';
import bannierevclogo from '../img/BanniereVClogo.png';
import pochettevc from '../img/pochette-40x40.jpg';
import promovc from '../img/PromoVC.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
                <section>
                    <div className="banniere">
                        <img src={bannierevc} alt="" />
                        <img src={bannierevclogo} alt="" className="bannierelogo" />
                    </div>
                </section>

                <article>
                    <div className="promo">
                        <img src={pochettevc} alt="" />
                        <div className="promotext">
                            <h3>New Album</h3>
                            <h2>VALEUR CHAIR</h2>
                            <p>Coming out September 10, 2023</p>
                            <div className="promovideo">
                                <iframe src="https://www.youtube.com/embed/6UkNzZkqG7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <a href="https://deadfuck.bandcamp.com/album/valeur-chair" target="_blank" className="preorder"> Pre-order Now</a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="articlemerch">
                        <img src={promovc} alt="" />
                        <div className="merchtext">
                            <hr />
                            <h3>New merch</h3>
                            <h2>Coming soon !</h2>
                            <hr />
                        </div>
                        <a href="https://deadfuck.bandcamp.com/merch" className="preorder"  target="_blank"> Merch</a>
                    </div>
                </article>

                <article>
                    <div className="tour">
                        <h2>Next Show</h2>

                        <section className="tourdate">
                            <div className="localdate">
                                <h4>Wed, FEB 14, 2024</h4>
                                <h5>Rock'n'Eat, Lyon, France</h5>
                                <h4>With : Festering Process, Pulsating Cerebral Slime</h4>
                            </div>
                            <div className="eventdate">
                                <h4>FREE ENTRANCE</h4>
                                <a href="https://www.facebook.com/events/1050126529571539/" target="_blank">EVENT</a>
                            </div>
                        </section>

                        <section className="tourdate">
                            <div className="localdate">
                                <h4>-----</h4>
                                <h5>-----</h5>
                                <h4>-----</h4>
                            </div>
                            <div className="eventdate">
                                <h4>-----</h4>
                                <a href="#">----</a>
                            </div>
                        </section>

                        <section className="tourdate">
                            <div className="localdate">
                                <h4>-----</h4>
                                <h5>-----</h5>
                                <h4>-----</h4>
                            </div>
                            <div className="eventdate">
                                <h4>-----</h4>
                                <a href="#">----</a>
                            </div>
                        </section>
                    </div>
                </article>

                            
        </div>
    )
}

export default Home;