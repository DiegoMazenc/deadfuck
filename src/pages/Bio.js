import logotrans from '../img/Logo_v2_transparent.png';
import pochettevc from '../img/pochette-40x40.jpg';
import pochettecharlatan from '../img/pochette 3-3.jpg';
import pochettehumanite from '../img/Pochette_humanité.jpg';
import pochetteaffliction from '../img/Pochette Affliction.jpg';
import live10_11_2017 from '../img/live/live10_11_2017.jpg';
import live27_02_2018 from '../img/live/live27_02_2018.jpg';
import live15_03_2018 from '../img/live/live15_03_2018.jpg';
import live27_04_2018 from '../img/live/live27_04_2018.jpg';
import live02_04_2018 from '../img/live/live02_04_2018.jpg';
import live04_05_2018 from '../img/live/live04_05_2018.jpg';
import live22_05_2018 from '../img/live/live22_05_2018.jpg';
import live28_06_2018 from '../img/live/live28_06_2018.jpg';
import live18_09_2018 from '../img/live/live18_09_2018.jpg';
import live06_06_2019 from '../img/live/live06_06_2019.jpg';
import live13_06_2019 from '../img/live/live13_06_2019.jpg';
import live14_06_2019 from '../img/live/live14_06_2019.jpg';
import live15_06_2019 from '../img/live/live15_06_2019.jpg';
import Live16_10_2019 from '../img/live/live 16_10_2019.jpg';
import live25_10_2019 from '../img/live/live25_10_2019.jpg';
import live26_09_2020 from '../img/live/live26_09_2020.jpeg';
import live10_07_2021 from '../img/live/live10_07_2021.jpg';
import live07_01_2022 from '../img/live/live07_01_2022.jpg';
import live26_02_2022 from '../img/live/live26_02_22.jpg';
import live18_06_2022 from '../img/live/live18_06_2022.jpeg';
import live12_07_2022 from '../img/live/live12_07_2022.jpeg';
import live16_09_2022 from '../img/live/live16_09_2022.jpg';
import live16_02_2023 from '../img/live/live16_02_2023.jpeg';
import live17_05_2023 from '../img/live/live17_05_2023.jpg';
import live18_05_2023 from '../img/live/Live18_05_2023.jpeg';
import Live19_05_2023 from '../img/live/live19_05_2023.jpeg';
import Live12_09_2023 from '../img/live/live12_09_2023.jpg';
import Live14_02_2024 from '../img/live/live14_02_2024.jpg';
import TechSheet from '../img/Deadfuck-Fiche-Technique.pdf';



import '../styles/Bio.css';

const Bio = () => {
    return (
    <div>
        <section>
            <div className="margintop"></div>
            <div className="banniere3">
                <img src={logotrans} alt="" />

            </div>
            <div className="divbtn">
                <a href={TechSheet} target="_blank" className="techlink">SEE OUR TECHNICAL
                    SHEET</a>
            </div>
        </section>

        <section>
            <h2>BIOGRAPHY</h2>
            <div className="bio">
                <p>Formé en 2017 à Lyon, Deadfuck est un trio de Death/Grind: <span className="motimportant">Chris</span> (guitare),<span className="motimportant"> Diégo</span> (chant) et <span className="motimportant">Antoine</span> (batterie).
                </p><br />
                <p> Notre nom a été choisi pour attirer l’attention, offenser; nulle envie d’être “des bourrins qui
                    parlent de gore”. Au contraire, au même titre qu’un Dying Fetus, nous avons choisi ce nom car il
                    choque, il interpelle, et attire l’attention sur nos paroles, qui ne sont pas “gore”, mais parlent
                    de thèmes sérieux: la pédophilie (“Innocence”), l’exutoire au travers de la musique
                    (“Catharsis”), le racisme (“Chroma”)... avec un sens presque “poétique” dans la formulation des
                    termes.</p><br />
                <p>Nous avons sorti notre 1er EP “<span className="motimportant">Affliction</span>” en Septembre 2018 , suivi du premier album,
                    “<span className="motimportant">#Humanité</span>” en Mars 2020, et d’un nouvel EP « <span className="motimportant">Charlatan </span>» en 2022. Le
                    second album “<span className="motimportant">Valeur Chair</span>” est en préparation pour une sortie 2023. Nos principes de
                    base en matière de composition sont: du blast, du gruik, et l’envie de surprendre l’auditeur en
                    cassant le plus souvent possible nos structures de chansons.</p><br />
                <p>Nous sommes un groupe de live avant tout, et adorons nous produire sur scène. Plus d’une vingtaine de
                    concerts à notre actif, énergiques, virulentes et passionnées, et nous sommes toujours à
                    l’écoute de propositions de nouvelles dates.</p>
            </div>
        </section>
        <section>
            <div className="disco">
                <h2>DISCOGRAPHY</h2>
                <div className="discocards">
                    <div className="disco1">
                        <img src={pochettevc} alt="" />
                        <h4>Valeur Chair |<span className="motimportant"> Album</span> </h4>
                        <p><span className="motimportant">Année </span>: 2023</p>
                        <p><span className="motimportant">Tracks</span> : 12</p>
                        <p><span className="motimportant">Production </span>: Auto-production <br /> Convulsound Production</p>
                        <p><span className="motimportant">Distribution </span>: France, Black, Death, Grind</p>
                    </div>
                    <div className="disco1">
                        <img src={pochettecharlatan} alt="" />
                        <h4>Charlatan | <span className="motimportant">EP </span></h4>
                        <p><span className="motimportant">Année </span>: 2022</p>
                        <p><span className="motimportant">Tracks</span> : 3</p>
                        <p><span className="motimportant">Production</span> : Auto-production</p>
                    </div>
                    <div className="disco1">
                        <img src={pochettehumanite} alt="" />
                        <h4>#Humanité | <span className="motimportant">Album </span></h4>
                        <p><span className="motimportant">Année </span>: 2020</p>
                        <p><span className="motimportant">Tracks</span> : 12</p>
                        <p><span className="motimportant">Production </span>: Auto-production <br /> Convulsound Production <br /> Noise Maker Studio
                        </p>
                    </div>
                    <div className="disco1">
                        <img src={pochetteaffliction} alt="" />
                        <h4>Afficltion | <span className="motimportant">EP, Demo</span></h4>
                        <p><span className="motimportant">Année </span>: 2018</p>
                        <p><span className="motimportant">Tracks</span> : 5</p>
                        <p><span className="motimportant">Production</span> : Auto-production</p>
                    </div>
                    
                    
                    
                </div>
            </div>
        </section>
        <section>
            <div className="live">
                <h2>LIVES</h2>
                <div className="livehistory">
                    <div className="liveyear"> 
                        <div className="live2">
                            <img src={Live14_02_2024} alt="" />                     
                            <img src={Live12_09_2023} alt="" />                     
                        </div>
                        <img src={Live19_05_2023} alt="" />
                        <div className="live2">
                            <img src={live17_05_2023} alt="" />
                            <img src={live18_05_2023} alt="" />
                        </div>
                        <div className="live2">
                            <img src={live16_09_2022} alt="" />
                            <img src={live16_02_2023} alt="" />
                        </div>
                        <div className="live2">
                            <img src={live18_06_2022} alt="" />
                            <img src={live12_07_2022} alt="" />
                        </div>
                        <img src={live26_02_2022} alt="" />
                        <img src={live07_01_2022} alt="" />
                        <img src={live10_07_2021} alt="" />
                        <img src={live26_09_2020} alt="" />
                        <img src={live25_10_2019} alt="" />
                        <div className="live2">
                            <img src={live15_06_2019} alt="" />
                            <img src={Live16_10_2019} alt="" />
                        </div>
                        <img src={live14_06_2019} alt="" />
                        <img src={live13_06_2019} alt="" />
                        <img src={live06_06_2019} alt="" />
                        <img src={live18_09_2018} alt="" />
                        <img src={live28_06_2018} alt="" />
                        <img src={live22_05_2018} alt="" />
                        <img src={live04_05_2018} alt="" />
                        <img src={live02_04_2018} alt="" />
                        <div className="live2">
                            <img src={live15_03_2018} alt="" />
                            <img src={live27_04_2018} alt="" />
                        </div>
                        <img src={live27_02_2018} alt="" />
                        <img src={live10_11_2017} alt="" />
                        
                    </div>
                </div>


            </div>
        </section>
    </div>
    )
}

export default Bio;