import bannierevc from '../img/BanniereVC.jpg';
import bannierevclogo from '../img/BanniereVClogo.png';
import pochettevc from '../img/pochette-40x40.jpg';
import promovc from '../img/PromoVC.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
                <section>
                    <div class="banniere">
                        <img src={bannierevc} alt="" />
                        <img src={bannierevclogo} alt="" class="bannierelogo" />
                    </div>
                </section>

                <article>
                    <div class="promo">
                        <img src={pochettevc} alt="" />
                        <div class="promotext">
                            <h3>New Album</h3>
                            <h2>VALEUR CHAIR</h2>
                            <p>Coming out September 10, 2023</p>
                            <div class="promovideo">
                                <iframe src="https://www.youtube.com/embed/6UkNzZkqG7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <a href="https://deadfuck.bandcamp.com/album/valeur-chair" target="_blank" class="preorder"> Pre-order Now</a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="articlemerch">
                        <img src={promovc} alt="" />
                        <div class="merchtext">
                            <hr />
                            <h3>New merch</h3>
                            <h2>Upcoming soon !</h2>
                            <hr />
                        </div>
                        <a href="https://deadfuck.bandcamp.com/merch" class="preorder"  target="_blank"> Merch</a>
                    </div>
                </article>

                <article>
                    <div class="tour">
                        <h2>Next Show</h2>

                        <section class="tourdate">
                            <div class="localdate">
                                <h4>Tue, SEPT 12, 2023</h4>
                                <h5>Le Farmer, Lyon, France</h5>
                                <h4>With : 3rd War Collapse (Brasil)</h4>
                            </div>
                            <div class="eventdate">
                                <h4>FREE ENTRANCE</h4>
                                <a href="https://www.facebook.com/events/9675963842473774/?ref=newsfeed" target="_blank">EVENT</a>
                            </div>
                        </section>

                        <section class="tourdate">
                            <div class="localdate">
                                <h4>-----</h4>
                                <h5>-----</h5>
                                <h4>-----</h4>
                            </div>
                            <div class="eventdate">
                                <h4>-----</h4>
                                <a href="#">----</a>
                            </div>
                        </section>

                        <section class="tourdate">
                            <div class="localdate">
                                <h4>-----</h4>
                                <h5>-----</h5>
                                <h4>-----</h4>
                            </div>
                            <div class="eventdate">
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