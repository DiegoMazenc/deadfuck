import React from "react";
import bannierespecimen from '../img/banniereSpecimen.png';
import bannierespecimenlogo from '../img/banniereSpecimenLogo.png';
import pochettevc from '../img/pochette-40x40.jpg';
import promovc from '../img/PromoVC.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
                <section>
                    <div className="banniere">
                        <img src={bannierespecimen} alt="" />
                        <img src={bannierespecimenlogo} alt="" className="bannierelogo" />
                    </div>
                </section>

                <article>
                    <div className="promo">
                        <img src={pochettevc} alt="" />
                        <div className="promotext">
                            <h3>Our last Album</h3>
                            <br/>
                            <h2>VALEUR CHAIR</h2>
                            <div className="promovideo">
                                <iframe src="https://www.youtube.com/embed/6UkNzZkqG7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <a href="https://deadfuck.bandcamp.com/album/valeur-chair" target="_blank" className="preorder">Order Now</a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="articlemerch">
                        <img src={promovc} alt="" />
                        <div className="merchtext">
                            <hr />
                            <h3>Vinyls, Digipack and T-shirt </h3>
                            <h2>AVAILABLE IN OUR SHOP  </h2>

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
                                <h4>fri, MAY 01, 2026</h4>
                                <h5>Rock n Eat, France</h5>
                                <h4>With : Reveal soon... </h4>
                            </div>
                            <div className="eventdate">
                                <h4>FREE</h4>
                                <a href="#" target="_blank">EVENT</a>
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