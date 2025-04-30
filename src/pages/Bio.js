import logotrans from "../img/Logo_v2_transparent.png";
import promoPicture from "../img/deadfuck-promo-picture.jpeg";
import logoBlack from "../img/deadfuck-logo-black.png";
import pochettevc from "../img/pochette-40x40.jpg";
import pochettecharlatan from "../img/pochette 3-3.jpg";
import pochettehumanite from "../img/Pochette_humanité.jpg";
import pochetteaffliction from "../img/Pochette Affliction.jpg";
import live10_11_2017 from "../img/live/live10_11_2017.jpg";
import live27_02_2018 from "../img/live/live27_02_2018.jpg";
import live15_03_2018 from "../img/live/live15_03_2018.jpg";
import live27_04_2018 from "../img/live/live27_04_2018.jpg";
import live02_04_2018 from "../img/live/live02_04_2018.jpg";
import live04_05_2018 from "../img/live/live04_05_2018.jpg";
import live22_05_2018 from "../img/live/live22_05_2018.jpg";
import live28_06_2018 from "../img/live/live28_06_2018.jpg";
import live18_09_2018 from "../img/live/live18_09_2018.jpg";
import live06_06_2019 from "../img/live/live06_06_2019.jpg";
import live13_06_2019 from "../img/live/live13_06_2019.jpg";
import live14_06_2019 from "../img/live/live14_06_2019.jpg";
import live15_06_2019 from "../img/live/live15_06_2019.jpg";
import Live16_10_2019 from "../img/live/live 16_10_2019.jpg";
import live25_10_2019 from "../img/live/live25_10_2019.jpg";
import live26_09_2020 from "../img/live/live26_09_2020.jpeg";
import live10_07_2021 from "../img/live/live10_07_2021.jpg";
import live07_01_2022 from "../img/live/live07_01_2022.jpg";
import live26_02_2022 from "../img/live/live26_02_22.jpg";
import live18_06_2022 from "../img/live/live18_06_2022.jpeg";
import live12_07_2022 from "../img/live/live12_07_2022.jpeg";
import live16_09_2022 from "../img/live/live16_09_2022.jpg";
import live16_02_2023 from "../img/live/live16_02_2023.jpeg";
import live17_05_2023 from "../img/live/live17_05_2023.jpg";
import live18_05_2023 from "../img/live/Live18_05_2023.jpeg";
import Live19_05_2023 from "../img/live/live19_05_2023.jpeg";
import Live12_09_2023 from "../img/live/live12_09_2023.jpg";
import Live14_02_2024 from "../img/live/live14_02_2024.jpg";
import Live23_03_2024 from "../img/live/live23_03_2024.jpg";
import Live31_08_2024 from "../img/live/live31_08_2024.jpg";
import Live19_10_2024 from "../img/live/live19_10_2024.jpg";
import Live14_12_2024 from "../img/live/live14_12_2024.jpg";
import Live04_01_2025 from "../img/live/live04_01_2025.jpg";
import Live23_05_2025 from "../img/live/live23_05_2025.jpg";
import frFlag from "../img/0188.png";
import gbFlag from "../img/0189.png";
import TechSheet from "../img/Rider-TechSheet-DEADFUCK2025.pdf";
import { useState } from "react";

import "../styles/Bio.css";

const Bio = () => {
  const [selectedBio, setSelectedBio] = useState("longFR");

  const bios = {
    longFR: (
      <>
        <p>
          Formé en 2017 à Lyon, Deadfuck est un trio de{" "}
          <span className="motimportant">Death-Grind</span> composé de{" "}
          <span className="motimportant">Chris</span> (guitare),
          <span className="motimportant"> Diégo</span> (chant) et{" "}
          <span className="motimportant">Antoine</span> (batterie). Derrière ce
          nom volontairement provocateur se cache un projet aussi brutal que
          réfléchi, mêlant violence musicale et profondeur des textes.
        </p>
        <p>
          Chez Deadfuck, pas de gore gratuit. Les paroles abordent des sujets
          sombres et personnels avec une forme d’écriture proche du poétique.
          Elles traitent des dérives les plus obscures de l’humanité, dans une
          société en apparence ordonnée mais profondément chaotique. À travers
          cette noirceur, le groupe explore aussi des thèmes plus
          existentialistes et corporels : la souffrance physique, la fragilité
          de l’humain, le dépassement de soi, et la valeur que la société
          accorde à nos corps.
        </p>
        <p>
          Depuis ses débuts, le groupe a sorti deux EPs (
          <span className="motimportant">Affliction</span> en 2018,{" "}
          <span className="motimportant">Charlatan</span> en 2022) et deux
          albums (<span className="motimportant">#Humanité</span> en 2020 et
          <span className="motimportant"> Valeur Chair</span> en 2023). Ce
          dernier marque un tournant important, soutenu par la signature du
          groupe sur le label{" "}
          <span className="motimportant">France Black Death Grind</span> la même
          année.
        </p>
        <p>
          Musicalement, Deadfuck revendique un ADN fait de blast beats rapides
          et puissants, de riffs extrêmes, et d’un chant qui explore un large
          spectre vocal gueulard et viscéral. Les morceaux sont construits sur
          des structures déconstruites, toujours en quête de tension et de
          surprise. Chaque titre est pensé comme un impact, où la rage porte un
          message.
        </p>
        <p>
          Deadfuck, c’est avant tout un groupe de live, qui se nourrit du chaos
          de la scène. Chaque concert est un exutoire collectif, tendu, intense,
          où la passion est aussi palpable que la sueur. Avec de nombreuses
          dates marquantes à leur actif (notamment avec Cardiac Arrest, Warfuck
          ou encore Putrid Offal), le trio reste en quête constante de nouvelles
          scènes à retourner.
        </p>
      </>
    ),
    longEN: (
      <>
        <p>
          Formed in 2017 in Lyon, Deadfuck is a Death-Grind trio consisting of{" "}
          <span className="motimportant">Chris</span> (guitar),{" "}
          <span className="motimportant">Diégo</span> (vocals), and{" "}
          <span className="motimportant">Antoine</span> (drums). Behind their
          deliberately provocative name lies a project that is as brutal as it
          is thoughtful, blending musical violence with lyrical depth.
        </p>

        <p>
          Deadfuck doesn’t rely on gratuitous gore. Their lyrics tackle dark and
          personal subjects with a poetic touch. They delve into the most
          disturbing aspects of humanity, set against a society that appears
          orderly but is deeply chaotic beneath the surface. Through this
          darkness, the band also explores more existential and corporeal
          themes: physical suffering, the fragility of the human body,
          self-overcoming, and the value society places on our bodies.
        </p>

        <p>
          Since their formation, the band has released two EPs (
          <span className="motimportant">Affliction</span> in 2018,{" "}
          <span className="motimportant">Charlatan</span> in 2022) and two
          albums <span className="motimportant">(#Humanité</span> in 2020 and{" "}
          <span className="motimportant">Valeur Chair</span> in 2023). The
          latter marks a significant milestone, with the band signing to the{" "}
          <span className="motimportant">France Black Death Grind</span> label
          in 2023.
        </p>

        <p>
          Musically, Deadfuck’s signature sound is built on fast and powerful
          blast beats, extreme riffs, and a vocally visceral performance that
          explores a wide range of guttural and abrasive tones. Their songs are
          structured in deconstructed forms, always seeking tension and
          surprise. Each track is designed to deliver a punishing impact, where
          rage serves a greater message.
        </p>

        <p>
          Deadfuck is, above all, a live band, feeding off the chaos of the
          stage. Each show is a shared outlet, tense and intense, where passion
          is as palpable as sweat. With numerous standout performances under
          their belt (notably alongside Cardiac Arrest, Warfuck, and Putrid
          Offal), the trio remains hungry for new stages to conquer.
        </p>
      </>
    ),
    shortFR: (
      <p>
        Formé en 2017 à Lyon, Deadfuck est un trio de Death-Grind composé de{" "}
        <span className="motimportant">Chris</span> (guitare),{" "}
        <span className="motimportant">Diégo</span> (chant) et{" "}
        <span className="motimportant">Antoine</span> (batterie). Leur musique
        allie violence musicale et profondeur textuelle, abordant des thèmes
        sombres et existentiels avec une touche poétique. Le groupe explore des
        sujets tels que la souffrance physique, la fragilité humaine, et le
        dépassement de soi, le tout dans une société en déclin. Leur son se
        caractérise par des blast beats brutaux, des riffs extrêmes, et un chant
        viscéral. Après la sortie de plusieurs EPs et albums, Deadfuck signe en
        2023 avec le label{" "}
        <span className="motimportant">France Black Death Grind</span> et
        continue de marquer les scènes avec des concerts intenses et passionnés.
      </p>
    ),
    shortEN: (
      <p>
        Formed in 2017 in Lyon, Deadfuck is a death grind trio made up of{" "}
        <span className="motimportant">Chris</span> (guitar),{" "}
        <span className="motimportant">Diégo</span> (vocals), and{" "}
        <span className="motimportant">Antoine</span> (drums). Their music
        combines musical violence with lyrical depth, tackling dark and
        existential themes with a poetic touch. The band explores subjects such
        as physical suffering, the fragility of humanity, and self-overcoming,
        all set within a society in decay. Their sound is driven by brutal blast
        beats, extreme riffs, and visceral vocals. After releasing several EPs
        and albums, Deadfuck signed with the{" "}
        <span className="motimportant">France Black Death Grind</span> label in
        2023 and continues to leave its mark with intense, passionate live
        performances.
      </p>
    ),
  };
  return (
    <div>
      <section>

        <div className="margintop"></div>
        <div className="banniere3">
          <img src={logotrans} alt="" />
        </div>
        <h2>DOWNLOAD</h2>

        <div className="downloadBtns">
          <div className="divbtn">
            <a href={TechSheet} target="_blank" className="techlink">
            Technical Sheet
            </a>
          </div>
          <div className="divbtn">
            <a href={logoBlack} target="_blank" className="techlink">
              Our Logo
            </a>
          </div>
          <div className="divbtn">
            <a href={promoPicture} target="_blank" className="techlink">
              Promo Picture
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2>BIOGRAPHY</h2>

        {/* Boutons de sélection */}
        <div className="bio-buttons">
          <button onClick={() => setSelectedBio("longFR")}>
            {" "}
            <img src={frFlag} alt="FR" className="flag" /> Longue
          </button>
          <button onClick={() => setSelectedBio("longEN")}>
            {" "}
            <img src={gbFlag} alt="GB" className="flag" /> Long
          </button>
          <button onClick={() => setSelectedBio("shortFR")}>
            {" "}
            <img src={frFlag} alt="FR" className="flag" /> Courte
          </button>
          <button onClick={() => setSelectedBio("shortEN")}>
            {" "}
            <img src={gbFlag} alt="GB" className="flag" /> Short
          </button>
        </div>

        {/* Affichage dynamique */}
        <div className="bio">{bios[selectedBio]}</div>
      </section>
      {/* <section>
                <h2>BIOGRAPHY</h2>
                <div className="bio">
                    <p>
                    Formé en 2017 à Lyon, Deadfuck est un trio de <span className="motimportant">Death-Grind</span> composé de <span className="motimportant">Chris</span> (guitare),<span className="motimportant"> Diégo</span> (chant) et <span className="motimportant">Antoine</span> (batterie). Derrière ce nom volontairement provocateur se cache un projet aussi brutal que réfléchi, mêlant violence musicale et profondeur des textes.</p>
                    <p>Chez Deadfuck, pas de gore gratuit. Les paroles abordent des sujets sombres et personnels avec une forme d’écriture proche du poétique. Elles traitent des dérives les plus obscures de l’humanité, dans une société en apparence ordonnée mais profondément chaotique. À travers cette noirceur, le groupe explore aussi des thèmes plus existentialistes et corporels : la souffrance physique, la fragilité de l’humain, le dépassement de soi, et la valeur que la société accorde à nos corps.</p>
                    <p>Depuis ses débuts, le groupe a sorti deux EPs (<span className="motimportant">Affliction</span> en 2018, <span className="motimportant">Charlatan</span> en 2022) et deux albums (<span className="motimportant">#Humanité</span> en 2020 et<span className="motimportant"> Valeur Chair</span> en 2023). Ce dernier marque un tournant important, soutenu par la signature du groupe sur le label <span className="motimportant">France Black Death Grind</span> la même année.</p>
                    <p>Musicalement, Deadfuck revendique un ADN fait de blast beats rapides et puissants, de riffs extrêmes, et d’un chant qui explore un large spectre vocal gueulard et viscéral. Les morceaux sont construits sur des structures déconstruites, toujours en quête de tension et de surprise. Chaque titre est pensé comme un impact, où la rage porte un message.</p>
                    <p>Deadfuck, c’est avant tout un groupe de live, qui se nourrit du chaos de la scène. Chaque concert est un exutoire collectif, tendu, intense, où la passion est aussi palpable que la sueur. Avec de nombreuses dates marquantes à leur actif (notamment avec Cardiac Arrest, Warfuck ou encore Putrid Offal), le trio reste en quête constante de nouvelles scènes à retourner.
                    </p>
                </div>
            </section> */}
      <section>
        <div className="disco">
          <h2>DISCOGRAPHY</h2>
          <div className="discocards">
            <div className="disco1">
              <img src={pochettevc} alt="" />
              <h4>
                Valeur Chair |<span className="motimportant"> Album</span>{" "}
              </h4>
              <p>
                <span className="motimportant">Année </span>: 2023
              </p>
              <p>
                <span className="motimportant">Tracks</span> : 12
              </p>
              <p>
                <span className="motimportant">Production </span>:
                Auto-production <br /> Convulsound Production
              </p>
              <p>
                <span className="motimportant">Distribution </span>: France,
                Black, Death, Grind
              </p>
            </div>
            <div className="disco1">
              <img src={pochettecharlatan} alt="" />
              <h4>
                Charlatan | <span className="motimportant">EP </span>
              </h4>
              <p>
                <span className="motimportant">Année </span>: 2022
              </p>
              <p>
                <span className="motimportant">Tracks</span> : 3
              </p>
              <p>
                <span className="motimportant">Production</span> :
                Auto-production
              </p>
            </div>
            <div className="disco1">
              <img src={pochettehumanite} alt="" />
              <h4>
                #Humanité | <span className="motimportant">Album </span>
              </h4>
              <p>
                <span className="motimportant">Année </span>: 2020
              </p>
              <p>
                <span className="motimportant">Tracks</span> : 12
              </p>
              <p>
                <span className="motimportant">Production </span>:
                Auto-production <br /> Convulsound Production <br /> Noise Maker
                Studio
              </p>
            </div>
            <div className="disco1">
              <img src={pochetteaffliction} alt="" />
              <h4>
                Afficltion | <span className="motimportant">EP, Demo</span>
              </h4>
              <p>
                <span className="motimportant">Année </span>: 2018
              </p>
              <p>
                <span className="motimportant">Tracks</span> : 5
              </p>
              <p>
                <span className="motimportant">Production</span> :
                Auto-production
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="live">
          <h2>LIVES</h2>
          <div className="livehistory">
            <div className="liveyear">
              <img src={Live23_05_2025} alt="" />
              <img src={Live04_01_2025} alt="" />
              <img src={Live14_12_2024} alt="" />
              <img src={Live19_10_2024} alt="" />
              <img src={Live31_08_2024} alt="" />
              <img src={Live23_03_2024} alt="" />
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
  );
};

export default Bio;
