
import '../styles/Press.css';
import pochettevc from '../img/pochette-40x40.jpg';
import pochettecharlatan from '../img/pochette 3-3.jpg';
import pochettehumanite from '../img/Pochette_humanité.jpg';
import pochetteaffliction from '../img/Pochette Affliction.jpg';
import live18_09_2018 from '../img/live/live18_09_2018.jpg';
import live10_07_2021 from '../img/live/live10_07_2021.jpg';
import live16_09_2022 from '../img/live/live16_09_2022.jpg';
import Live12_09_2023 from '../img/live/live12_09_2023.jpg';
import fbdg from '../img/logoFBDG trsprt.png';
import lhn from '../img/la-horde-noire-2.jpg';
import gnn from '../img/grind-n-noizy.jpg';
import miv from '../img/MetalInVeins.jpg';
import raca from '../img/RadioCanut.jpg';

import { Tabs } from '@mantine/core';

function Press() {
    return (
        <div>
            <div className="margintop"></div>
            <h2>CHRONIQUES</h2>
            <div className="chronique">

                <Tabs color="yellow" variant="outline" radius="md" defaultValue="valeurchair">
                    <div className="chronique_nav">
                        <Tabs.List>
                            <Tabs.Tab value="valeurchair" ><img src={pochettevc} alt="" /></Tabs.Tab>
                            <Tabs.Tab value="charlatan" ><img src={pochettecharlatan} alt="" /></Tabs.Tab>
                            <Tabs.Tab value="humanite" ><img src={pochettehumanite} alt="" /></Tabs.Tab>
                            <Tabs.Tab value="affliction" ><img src={pochetteaffliction} alt="" /></Tabs.Tab>
                        </Tabs.List>
                    </div>

                    <Tabs.Panel value="valeurchair" pt="xs">

                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="Wallabirzine">
                            <Tabs.List>
                                <Tabs.Tab value="Wallabirzine">Wallabirzine</Tabs.Tab>
                                <Tabs.Tab value="Nonoise">Nonoise Nogood Webzine</Tabs.Tab>
                                <Tabs.Tab value="Anteverse">Anteverse</Tabs.Tab>
                                <Tabs.Tab value="Metallian">Metallian</Tabs.Tab>
                                <Tabs.Tab value="ondeMetal">Une Onde de Metal</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="Wallabirzine" pl="xs">
                                <div className="titrechro">
                                    <p>Wallabirzine</p>
                                    <p>Auteur : --</p>
                                    <p>Note : --</p>
                                </div>
                                Influencé par Benighted, Jig-Ai, Nasum, Dying Fetus, Devourment. La sorcellerie du trio Lyonnais de DEADFUCK, de grindcore/deathlique surgit de cet album comme une lumière indistincte. Elle vient de la terre, des musiciens, des riffs, de cette rythmique animale et blast, et de chant gruikdesque.<br /> Ne laissez personne vous dire le contraire. Ce disque de bourre-pif bovin est subjugué par sa droiture véhémente. Sous la langue humide de ces psaumes, un nouvel amour implanté flâne dans vos entrailles en un torrent de lave blasté.
                            </Tabs.Panel>

                            <Tabs.Panel value="Nonoise" pl="xs">
                                <div className="titrechro">
                                    <p>Nonoise Nogood Webzine</p>
                                    <p>Auteur : Davidnonoise</p>
                                    <p>Note : --</p>
                                </div>
                                Deadfuck  " valeur chair"<br />
                                Tout chaud ,tout beau,voici la nouvelle réalisation des Lyonnais de Deadfuck.<br />
                                12 titres dont l'influence première pourrait être Benighted,surtout au niveau de l'étendue vocale du frontman.
                                Y a pire comme influence,non?<br />
                                Il est donc facile a comprendre que le groupe n'est pas particulièrement axé doom metal,mais plutôt brutal death et grind bien tordu.<br />
                                Le trio se pose avec 12 compos, issues d'un ou plusieurs cerveaux malades ,dont l'univers serait plus proche de la crise d'épilepsie que de l'effet d'un neuroleptique pour hippopotame.<br /><br />
                                Du blast,du gruik,de la double,des riffs bien grind ,qui tombent parfois dans une accalmie plus slam death.
                                Cependant l'orientation reste principalement vers Benighted,a plusieurs niveaux. Bien que l'aspect vocal part encore plus loin que celui des autres frenchy.<br />
                                Le skeud est court,car seulement 3 titres dépassent les deux minutes. 2 minutes pour du grind , c'est quasiment du morceau des Pink Floyd.<br />
                                Musicalement,il n'y a pas le temps de s'ennuyer en écoutant le déluge nous tomber sur la gueule,car le groupe a tout de même bien élaboré ses compos, malgré la courte durée.<br />
                                Charlatan est delirant par exemple.<br /><br />
                                Un folie douce fortement bien produite, même si j'aurais aimé un son de caisse claire un poil plus audible dans les passages rapides.
                                En dehors de ce chipotage honteux de ma part,j'avoue,il ressort un bon volume d'écoute de mes enceintes ,qui raffolent de ce genre d'épaisseur sonore .<br /><br />
                                A noter qu'il y a un bel effort au niveau des textes,en français et qui sont consultables sur leur bandcamp :
                                "Tu vis et puis tu grandis dans un monde qui est rempli de mépris<br />
                                On t’offrira la connaissance et le savoir et tout autant de sentiments détestables<br />
                                Tes efforts qui t’élèvent peuvent être la source d’épreuves qui t’achèvent<br />
                                Tu te perdras dans un épais brouillard sans comprendre les raisons de ces songes déplorables"<br /><br />
                                Comme quoi, c'est une raison de plus pour se pencher sur ce nouvel album .<br />
                                Entraînant et taillé pour le live.<br />
                                Go checker tout ça.<br />
                                Well done
                            </Tabs.Panel>

                            <Tabs.Panel value="Anteverse" pl="xs">
                                <div className="titrechro">
                                    <p>Anterverse</p>
                                    <p>Auteur : Anteverse</p>
                                    <p>Note : 4/5</p>
                                </div>
                                J'avais pris une belle mandale dans gueule en 2020 avec le "#Humanity" du trio Lyonnais Deadfuck nouveau venu sur la scène death/grind depuis 2018 et leur EP "Affliction", et de l'eau aura coulé sous les ponts en trois années mais sans oublier d'omettre un "EP" trois titres avec "Charlatan" en 2022. Deadfuck aura donc bien fait ses preuves sur skeuds que sur les planches et a su prouver que l'on pouvait compter sur ces derniers pour faire perdurer la scène death et grindcore (végétarienne) hexagonale.<br/><br/>

                                Et c'est en 2023 que tout va se jouer avec ce "Valeur Chair" qui va devoir entériner le savoir faire du trio et prouver ou non si l'on se doit de continuer a miser sur la bête Deadfuck. Et la réponse est bien sur que oui ! Meme si je poserai d'entrée un bémol avec le fait que l'effet de surpise aura disparu et qu'il faudra s'appuyer encore plus sur le contenu de ce second album. Bon déjà l'on est largement rassuré avec l'intro "Diégèse" qui nous assène une nouvelle fois une production ultra massive qui fait exploser d'autant plus les titres les plus punks de "Valeur Chair" ("Ecchymose", le groovy "Genèse", "Apoptose", "Grime" et ses riffs a faire vriller les cervicales et l'ultra court "Brutal" qui termine le skeud"), mais si vous êtes la a lire cette chronique c'est pour vous prendre une dose de blastbeat ce qui sera fait avec les fou furieux "Traitre" et son riff ultra efficace, le plus varié "Bétail" avec en guest Mathieu de Festering Process autre gros morceau grind avec son solo simple mais efficace (et le seul de l'album) et le a la fois ultra speed et saccadé "Pandémie".<br/><br/>

                                "Traitre" et "Bétail" qui sont donc pour moi les meilleurs titres de "Valeur Chair" par leur variété et leur composiition plus chiadée auquel je rajouterai "Maniaque", archi Carcassien dans l'approche de ses riffs et son ambiance qui ouvre une belle porte sur l'avenir du groupe avec ce titre ultra efficace en parti midtempo. Et pour terminer je poserai un dernier projecteur sur le titre "Charlatan" qui ira chercher plus du coté du power noise que du pure grindcore.<br/><br/>

                                L'effet de surprise étant donc estompé il n'enlève rien a la puissance de ce "Valeur Chair" dévastateur aux cris et couinements porcins dans tous recoins qui en fait un des disques les plus violent de cette année 2023 et qui élève encore Deadfuck sur la scéne death/grind (plus grindcore en définitive que vraiment death) qui est a se procurer comme l'était son prédécesseur "#Humanity".
                            </Tabs.Panel>

                            <Tabs.Panel value="Metallian" pl="xs">
                                <div className="titrechro">
                                    <p>Metallian Underground n°17</p>
                                    <p>Auteur : Michaël Schmitt</p>
                                    <p>Note : 5/6</p>
                                </div>
                                Après un premier album, #Humanité, les Lyonnais sont de retour avec un deuxième opus dont la violence, l'énergie et les compositions sont encore plus monstrueuses et dévastatrices. Les riffs ravageurs s'enchaînent avec une section rythmique intense et variée. Et que dire du chant de Diégo, à part que c'est sans doute l'un des meilleurs en France dans ce style, tout simplement !
                            </Tabs.Panel>

                            <Tabs.Panel value="ondeMetal" pl="xs">
                                <div className="titrechro">
                                    <p>Une Onde de Metal (Radio Balistiq)</p>
                                    <p>Auteur : Michaël Vernet</p>
                                    <p>Note : --</p>
                                </div>
                                "On va du côté de Lyon, on va retrouver Deadfuck, un groupe de Death Grind qui est composé de trois membres, donc c'est un trio, et ils nous font l'honneur de montrer que la scène Grind en france est en force, avec ce deuxième album intitulé "Valeur Chair". L'artwork de l'album est magnifique, mais le Death Grind qu'ils nous envoient est juste monstrueux. Technicité, brutalité, growl, en veux-tu en voilà. C'est servit avec un musicalité très propre, très carrée. Un véritable plaisir d'écouter Deadfuck."
                            </Tabs.Panel>
                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="charlatan" pt="xs">
                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="grindnnoizy">
                            <Tabs.List>
                                <Tabs.Tab value="grindnnoizy">Grind N Noizy 11</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="grindnnoizy" pl="xs">
                                <div className="titrechro">
                                    <p>Grind N Noizy 11</p>
                                    <p>Auteur : Yoann</p>
                                    <p>Note : --</p>
                                </div>
                                Et une petite mise en bouche en attendant le nouvel album !!! DEADFUCK nous a sorti trois morceaux enregistrés en mode total DIY, faut pas trop vous étonner de la qualité sonore (quoique c'est quand même tout à fait honnête pour ce style d'enregistrement).<br /> A l'heure où j'écris ces lignes, je ne sais toujours pas si ce sont des titres qui seront présents justement sur cet album en préparation (les réponses doivent se trouver dans l'interview), mais dans l'ensemble ça n'annonce que du bon (surtout si la production est à la hauteur) avec un grind/death bien relevé qui remmémore pas mal de groupes du milieu des années 2000, qui piochent à la fois dans la dureté du death que dans l'explosion du grind/hardcore. Petite surprise sur le dernier morceau avec une intervention rappée. "Charlatan" est certes court, mais ça passe tout seul à l'apéro et ça augure de bonnes choses pour l'avenir. A suivre.
                            </Tabs.Panel>
                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="humanite" pt="xs">
                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="autremonde">
                            <Tabs.List>
                                <Tabs.Tab value="autremonde">L’autre Monde</Tabs.Tab>
                                <Tabs.Tab value="hordenoire">La Horde Noire</Tabs.Tab>
                                <Tabs.Tab value="Anteverse">Anteverse</Tabs.Tab>
                                <Tabs.Tab value="grindnnoizy">Grind N Noizy 3</Tabs.Tab>
                                <Tabs.Tab value="thrashocore">Thrashocore</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="autremonde" pl="xs">
                                <div className="titrechro">
                                    <p>L’autre Monde</p>
                                    <p>Auteur : Xavier</p>
                                    <p>Note : --</p>
                                </div>
                                Le sujet de l’album de DeadFuck est clair : nous allons examiner, en profondeur, les différentes facettes de l’Humanité. Et ce n’est pas très beau à voir. Mais qu’est ce que c’est bon à entendre !<br /> Le grind-core des lyonnais de DeadFuck est d’une violence assourdissante. Ici, les bases sont posées dès les premiers instants de Parasite, qui ouvre l’album avec ce petit insert sonore « c’est qu’on va vers une fin de l’Humanité ». Vous savez à quoi vous en tenir. Comme lorsque nous passez le portail qui porte à son sommet « vous qui entrez en ce lieu, abandonnez tout espoir ».<br /><br /> DeadFuck a fait les choses en grand pour son  album #humanité : digipack, pochette travaillée, livret avec les paroles (parfaitement inaudibles bien sûr). Un bel objet qui est l’aboutissement du travail de composition du groupe. Les titres sont tous aussi dévastateurs les uns que les autres. Et les intro ou outro qui font toujours mouches comme les très classiques extraits du film « Maîtresses très particulières » de Burd Tranbaree, sur Obscène (titre4), vous met bien dans l’ambiance. <br />Ici, c’est violent, c’est sale, à l’image du monde actuel. Aucune concession n’est possible pour DeadFuck (Innocence).<br />
                                Les breaks, beat-down, growls, aspis et autres spécificités techniques du grind, sont exploités dans tous les sens. Et loin d’un gros bordel sonore, c’est un cataclysme parfaitement organisé quoi
                                vous arrive en pleine face.<br /><br /> C’est agressif, abrasif à souhait. Il est évident que si vous êtes vierge en la matière, vous allez sortir de cette écoute avec les oreilles en sang. Mais une fois les conduits auditifs bien élargis, vous trouverez un véritable plaisir à vous faire violenter, de savante manière par la brutalité des compositions de DeadFuck.

                            </Tabs.Panel>

                            <Tabs.Panel value="hordenoire" pl="xs">
                                <div className="titrechro">
                                    <p>La Horde Noire</p>
                                    <p>Auteur : Mika Hell</p>
                                    <p>Note : 8.5/10</p>
                                </div>
                                Le Death/Grind du trio Lyonnais Deadfuck ( tient ça me rappelle une chanson du groupe de
                                brutal death américain Gorgasm...) passe à un autre niveau en cette année 2020. En effet après un premier EP en 2018, qui était déjà bon mais trés court et avec un son très underground , ils reviennent pour mettre tous le monde d’accord avec « #humanité » .<br /><br />
                                Le premier album de Deadfuck se compose de 12 titres pour une durée de 21 minutes et 43 secondes ( typiquement Grind ça ). L’artwork réalisé par leurs chanteur Diego est sublime, il réussi à nous mettre dans le ton de l’album sans encore l’avoir mis sur platine. Des paroles en français et pour chaque titre un mot... on n’est pas loin du concept album, tout semble être en adéquation pour.
                                Musicalement c’est puissant, honnête, ça vient des tripes, ça prend au tripes, du death/grind maîtrisé et appliqué avec passion. Les cassures de rythme se font légion, Antoine à la batterie nous montre que pour apprécier un jeu rapide il faut également savoir casser des cervicales avec des rythmiques lourdes et intenses. Les riffs de guitare sont inspirés, allant du death au grind avec une énergie punk perceptible, tout cela avec un bon gros son d’une lourdeur abyssale mais sans perdre en énergie, chose qui est assez rare dans le Death/grind pour être souligné. Mention spéciale pour le chanteur Diego qui nous prouve que l’on n’est pas obligé de faire dans le gore dans ce style de musique trop souvent stéréotypé, que l’on peut faire des growls et des gruiks mais arriver à traiter des sujets sérieux et de société comme sur ‘Chroma’ (racisme), ‘Innocence’ (pédophilie) ou encore ‘Catharsis’ (la musique comme exécutoire ).... Tout cela écrit d’une bien belle façon et en français s’il vous plaît ! <br /><br />Deadfuck livre un album complet de très bonne facture et on sent déjà que chaque titre peut faire très mal lors de leurs futures concerts car il est évident après écoute que les morceaux de ce sublime album est fait pour le live. Des blasts, des gruiks et des compositions inspirées à base de structures déconcertantes qui laissent l’auditeur, même averti, sur le cul !


                            </Tabs.Panel>

                            <Tabs.Panel value="Anteverse" pl="xs">
                                <div className="titrechro">
                                    <p>Anteverse</p>
                                    <p>Auteur : Antephil</p>
                                    <p>Note : 4/5</p>
                                </div>
                                Bam ! un peu de grind/death underground made
                                in France avec le premier album des Lyonnais de
                                Deadfuck, une offre qui ne m’était pas permise
                                de refuser avec «#humanité» paru en cette année
                                pourrie de 2020 et qui fait suite a l’EP «Affliction»
                                de 2018 ! Pour entrer dans le vif des entrailles de
                                «#humanité» ce dernier comporte 4 titres déjà
                                présents sur «Affliction» : «Chroma», «Schisme»,
                                «Catharsis» et «Vocifère» («Rage» lui a été dégagé
                                des 8 minutes de l’EP et qui ne figure donc pour
                                sur ce premier album) mais heureusement aucune
                                redite ne se fait sentir tant le trio a enfin pu s’offrir
                                une production qui lui fait franchir un palier dans
                                sa brutalité !<br /><br />
                                Pour ma part si «#humanité» n’avait été qu’un album
                                bas du front pour le style j’aurai donné une fin de
                                non recevoir et malgré un patronyme qui pourrait
                                classer Deadfuck dans la catégorie du porngrind
                                on est bien plus proche de la powerviolence d’un
                                Nasum ou d’un Nails et du groove/rock ‘n’ roll des
                                regrettés défunts fracassés du bulbe qu’étaient
                                les Australiens de Blood Duster, le tout noyé dans
                                un mare de grunts, de borogymes et de cris de
                                porcins qui restent la pour le coup dans le plus pur
                                porngrind (autant prévenir qu’il faudra se lever de
                                bon matin pour arriver a caler les jolis textes en
                                Francais du livret avec les vociférations de Diégo!).<br /><br />
                                Je ne trouve pas utile d’extraire en exemples
                                certains titres de «#humanité» pour mettre en
                                évidence les différentes facettes de la brutalité
                                de Deadfuck, sa science du riff chirurgical, du
                                groove et du blastbeat nucléaire étant distillée
                                au sein de chaque piste, mais je retiens pour ma
                                part les grosses mandales que sont «Parasite», les
                                frondeurs «Catharsis» et «Chimére» et l’ultra brutal
                                «Hypocrisie». Bien entendu qui jacte grindcore veut
                                forcement dire conscience politique, humaniste
                                et écologique («Fracture»)...des thèmes que l’on
                                retrouve la aussi forcement chez Deadfuck, mais
                                aussi au sujet des déviances au sein de la religion
                                (l’intro de «Innoncence» met salement mal a l’aise).
                                Heureusement Deadfuck n’en oublie pas un poils
                                de gaudriole avec un «Obscéne» accompagné
                                de son intro et son outro bien connue de fans de
                                nanars !<br /><br />
                                «#humanité» est donc un album que je ne
                                recommande pas seulement aux fans de grindcore
                                mais plus largement aussi aux amateurs de brutal
                                death a la Benighted, l’abattage instrumental du
                                guitariste/bassiste Chris et du batteur Antoine fait
                                de ce premier album une belle pièce de choix pour
                                les fans du genre. Un bagage technique qui permet
                                de ne pas décrocher de ses presque seulement
                                22 minutes (a part les 3 minutes d’»Innocence»
                                les titres entre 1 et 2 minutes sont largement au
                                compteur). Comme la formule le veut dans ce
                                genre de cas : un gros potentiel pour Deadfuck
                                que je vais garder dans mon radar de l’extrême.


                            </Tabs.Panel>

                            <Tabs.Panel value="grindnnoizy" pl="xs">
                                <div className="titrechro">
                                    <p>Grind N Noizy 3</p>
                                    <p>Auteur : YO</p>
                                    <p>Note : --</p>
                                </div>
                                J’aime quand les groupes parlent de fin
                                de l’humanité. Dès l’intro le ton est donné,
                                DEADFUCK va nous donner sa vision qui est
                                tout sauf optimiste de nos congénères bipèdes.
                                Bénéficient d’une production bien plus aboutie
                                que sur «Affliction», « #humanité» nous montre
                                un DEADFUCK qui maîtrise totalement les codes
                                de la furie deathgrind, c’est violent et hargneux.
                                Mention spéciale au chant qui se veut assez
                                varié, allant à la fois dans le cri de rage et dans le
                                pig squeal. Bon, si on veut râler un peu certains
                                éléments sont un peu déjà vus malheureusement
                                (bordel l’intro d’»Obscene» qui est vue et revue,
                                surtout quand ça a déjà été utilisé par un monstre
                                comme KICKBACK). Mais c’est bien le seul petit
                                point négatif que j’ai trouvé. Tout le reste est plus
                                que prometteur, DEADFUCK correspond bien à ce
                                que j’attends d’un groupe mêlant grind et death
                                metal.

                            </Tabs.Panel>

                            <Tabs.Panel value="thrashocore" pl="xs">
                                <div className="titrechro">
                                    <p>Thrashocore</p>
                                    <p>Auteur : Sagamore</p>
                                    <p>Note : 7,5/10</p>
                                </div>
                                J’aime le Grindcore, c’est un fait. Et je l’aime
                                encore un peu plus quand il est frappé du sceau
                                AOC bleu, blanc, rouge, notre scène continuant de
                                prouver, au fil des sorties, qu’elle n’a pas à rougir
                                face aux Grands Anciens du genre. J’y recherche
                                systématiquement les mêmes choses : puissance,
                                authenticité, sincérité, et passion. Pas besoin
                                d’être irréprochable, ou intelligent. Pour qu’un
                                disque passe le test avec brio, il faut simplement
                                qu’il ne triche pas, et passe mes tympans au papier
                                de verre. Vu le calibre des sorties que le genre a
                                pu nous offrir ces dernières années, autant vous
                                dire qu’il est devenu, pour une galette, difficile
                                de se tailler une place de choix dans mes menus
                                quotidiens.<br /><br />
                                Oui, j’aime le Grindcore, dans ce qu’il peut avoir de
                                plus bête, de plus méchant. Forcément, ce n’était
                                qu’une question de temps avant que je ne me
                                penche sur le cas Deadfuck. Un patronyme pareil,
                                de ceux qui feraient suer Jérôme Garcin à grosses
                                gouttes, ne pouvait qu’augurer du meilleur. Et
                                force est de constater le sacré bout de chemin
                                qu’ont parcouru nos trois Lyonnais ! Le groupe
                                signait son acte de naissance officiel par le biais
                                d’un EP, «Affliction», sorti en 2018. Mis en boîte
                                en quelques heures à peine, de l’aveu même de
                                Chris, Diego et Antoine, quelques morceaux qui
                                sentaient la sueur, et l’urgence. Bien qu’handicapé
                                par un son un peu approximatif, l’objet dévoilait
                                déjà un potentiel assez prononcé pour le bottage
                                de cul. Une affaire à suivre, donc ! Après un
                                petit financement participatif, de quoi pouvoir
                                s’offrir une production qui fasse honneur aux
                                compositions, c’est en Mars dernier qu’est sorti
                                «#Humanité», première longue manifestation du
                                trio, en indépendant. Un «long» format se voulant,
                                si l’on en croit le couple tracklist et pochette, un
                                tantinet revendicatif, une palanquée rageur. Alors,
                                essai transformé ?<br /><br />
                                La réponse est oui. J’évoquais l’évolution du
                                combo plus haut, ce n’est pas pour rien : Enfin un
                                son qui soit à la hauteur des douze titres ! Enfin,
                                on peut discerner toute l’étendue du talent de nos
                                trois Gones ! Chris à la guitare, pioche aussi bien
                                chez Mumakil qu’Insect Warfare et Napalm Death
                                (l’ouverture de «Chroma», forcément) pour tricoter
                                des riffs entre le bourre-pif bovin («Catharsis», en
                                featuring avec le hurleur de Warfuck) et les assauts
                                plus sournois («Hypocrisie»). Antoine, derrière les
                                fûts, de power-blasts en blast-beats, sans parler
                                de ses tapis de double-pédale qui laissent sur
                                le cul («Innocence» et son final, bordel !), tient
                                solidement la baraque. Il bourre, il bourre, sans
                                jamais faiblir, bref, grand plaisir. Et le chant, du
                                coup ?<br /><br />
                                C’est mon seul gros grief envers «#Humanité»,
                                pour être tout à fait honnête. Dès qu’il s’agit
                                de hurler ou de beugler (oui oui, il y a bien une
                                différence entre les deux), Diego prouve, tout au
                                long de l’opus, qu’il en a sous le pied. Puissance,
                                coffre, tout y est. Dès lors, je trouve dommage
                                d’en arriver à presque «gâcher» des compositions
                                si puissantes et bien senties par des pig-squeals.
                                C’est très personnel, mais je n’ai jamais pu
                                blairer ce genre de vocalises, trouvant qu’elles
                                décrédibilisent totalement un disque, comiques
                                avant d’être convaincantes - Laissez ça au slam
                                Death, pitié. Et, malheureusement pour l’album
                                qui nous intéresse aujourd’hui, il y en a partout, du
                                démarrage du second titre (qui m’a brutalement
                                sorti du bain) jusqu’au grand final... Je ne sais
                                pas, ça sonne faux, en décalage complet avec le
                                ton de l’album - même si quelques samples bien
                                crétins («Obscène») pourraient me donner tort.
                                Tant mieux pour ceux qui y goûtent, et tant pis
                                pour moi !<br /><br />
                                «#Humanité» me plaît, indéniablement. Audelà
                                d’être, avant toute chose, un bon album
                                de Grindcore, teinté de Death Metal quand il
                                le faut, il me donne surtout l’impression de me
                                correspondre. Je crois que je m’identifie assez
                                aux musiciens de Deadfuck. Quand j’écoute ce
                                premier longue-durée, j’ai l’impression qu’on a,
                                tous les quatre, trippé en boucle sur les mêmes
                                groupes, saigné les mêmes disques en mode
                                repeat... Qu’on veut traduire cet amour pour les
                                décibels et les coups de boutoir, chacun à notre
                                manière. La plume pour l’un, les instruments pour
                                les autres. Et le résultat est à la hauteur de ce que
                                j’attends du style : preuve en est, malgré mon
                                aversion pour les squeals, je me surprends à y
                                revenir régulièrement. Si ça, c’est pas un gage de
                                qualité, je ne sais pas ce qu’il vous faut !


                            </Tabs.Panel>
                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="affliction" pt="xs">
                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="frenchmetal">
                            <Tabs.List>
                                <Tabs.Tab value="frenchmetal">French Metal</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="frenchmetal" pl="xs">
                                <div className="titrechro">
                                    <p>French Metal</p>
                                    <p>Auteur : Kévin</p>
                                    <p>Note : --</p>
                                </div>
                                Je vais être honnête, ça fait des mois que la bio
                                du groupe est faite mais que je n’arrive pas à me
                                pencher sur l’EP. Déjà il faut admettre que le chant
                                «grind» ne m’a jamais vraiment séduit.<br />
                                A chaque tentative d’écoute, je fais autre chose
                                en même temps, ma concentration est ailleurs, je
                                trouve ça brouillon. Je zappe. Plusieurs fois.<br /><br />
                                Et là, les mecs de Deadfuck qui sont en train de
                                lire la chronique ils transpirent tu vois.
                                Je me caresse la barbe tranquille, en me disant
                                que je suis un bel enculé. J’me marre.<br /><br />
                                Bon ok, je me suis assis tranquille dans mon canap’
                                et posé un casque sur mes oreilles. L’écoute s’en
                                est trouvée métamorphosée. Pourquoi pas, mais ce
                                n’est pas vraiment comme ça que j’imaginais une
                                écoute d’un groupe revendiquant des influences
                                death et grInd. Faut admettre que l’effort (surtout
                                pour moi) est moindre puisqu’avec cinq titres le
                                bordel dure sept minutes.<br /><br />
                                Finalement, moi qui ne suis pas friand de ces univers
                                j’ai fini par y prendre beaucoup de plaisir. Je me
                                fais progressivement au son si singulier du style.
                                Les bruits de truie qu’on égorge me rappelle qu’à
                                un moment dans ma vie j’ai écouté Broke NCYDE
                                (Get Crunck) tous les matins d’un été entier. Oui,
                                ce n’est pas facile à assumer mais c’est comme
                                ça. Au niveau des textes, on est quand même sur
                                un niveau incomparable, le groupe s’attaquant à
                                des sujets aussi sérieux que la pédophilie ou le
                                racisme. Ca je l’ai appris en lisant la bio (à l’écoute
                                c’était compliqué).<br /><br />
                                Il faut aussi admettre que certains riffs sont
                                absolument destructeurs, soutenus par une
                                batterie dont la caisse clair se prend pour un
                                fusil mitraillette. Les morceaux, évidemment très
                                courts, sont en plus cassés sans cesse par de
                                nombreux changements de structures. Quand
                                on réalise tout ça le temps devient d’autant plus
                                court encore. L’EP a cessé de tourner avant même
                                que tu aies fini de te gratter les couilles. Tu avais
                                commencé au premier titre, c’est dire.<br /><br />
                                Il y a du bon dans ce disque. Même du très bon.
                                Si tu es déjà adepte du style tu le comprendras
                                sûrement plus vite que moi. Si tu l’es pas je t’invite
                                à faire un petit effort. Mais quand même, à quand
                                un album de grind avec un son puissant, grave et
                                profond ?

                            </Tabs.Panel>
                        </Tabs>
                    </Tabs.Panel>
                </Tabs>
            </div>
            <h2>LIVE REPORTS</h2>
            <div className="chronique">

                <Tabs color="yellow" variant="outline" radius="md" defaultValue="18/09/2018">
                    <div className="chronique_nav">
                        <Tabs.List>
                            <Tabs.Tab value="18/09/2018" ><div className="dateLR">18/09/2018</div></Tabs.Tab>
                            <Tabs.Tab value="10/07/2021" ><div className="dateLR">10/07/2021</div></Tabs.Tab>
                            <Tabs.Tab value="16/09/2022" ><div className="dateLR">16/09/2022</div></Tabs.Tab>
                            <Tabs.Tab value="12/09/2023" ><div className="dateLR">12/09/2023</div></Tabs.Tab>
                        </Tabs.List>
                    </div>

                    <Tabs.Panel value="18/09/2018" pt="xs">

                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="Pavillon 666">
                            <Tabs.List>
                                <Tabs.Tab value="Pavillon 666">Pavillon 666</Tabs.Tab>
                                <Tabs.Tab value="Thrashocore">Thrashocore</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="Pavillon 666" pl="xs">
                                <div className="titrechro">
                                    <p>Pavillon 666</p>
                                    <p>Auteur : Black.Roger</p>
                                </div>
                                <div className="articleLR">
                                    <div className="imgLR"><img src={live18_09_2018} alt="" /></div>
                                    <div className="textLR">
                                        <h3 className="titreLR">CARDIAC ARREST + DEADFUCK + PULSATING CEREBRAL SLIME <br />
                                            LE 18 SEPTEMBRE 2018 À LYON, FRANCE (ROCK N’EAT)</h3>

                                        <hr />
                                        Avec DEADFUCK, ça démarre à fond les manettes
                                        (à fond les cannettes ?) avec du death/grind musclé
                                        qui n’a pas peur des mots doux qui se glissent dans
                                        nos conduits auditifs.
                                        Ce trio Lyonnais nous présente son EP « affliction
                                        » tout chaud sorti du four metal O grind et nous
                                        vocifère sa rage sans séparer le bon et le mauvais,
                                        avec pourtant un certain schisme en fond d’écran.
                                        Bref nos lascars ont de l’énergie et des idées
                                        à revendre et en live ça fait mal, très mal (ou du
                                        bien en ce qui nous concerne). Nous avons devant
                                        nous un chanteur qui a du coffre pour le style, un
                                        guitariste inventif et un batteur grimaçant derrière
                                        ses fûts. Tout est donc réuni pour envoyer du
                                        lourd, du costaud, du rapide, de l’extrême quoi !
                                        Excellent set et bonne découverte en ce qui me
                                        concerne.
                                    </div>
                                </div>
                            </Tabs.Panel>

                            <Tabs.Panel value="Thrashocore" pl="xs">
                                <div className="titrechro">
                                    <p>Thrashocore</p>
                                    <p>Auteur : ERZEWYN</p>
                                </div>
                                <div className="articleLR">
                                    <div className="imgLR"><img src={live18_09_2018} alt="" /></div>
                                    <div className="textLR">
                                        <h3 className="titreLR">CARDIAC ARREST + DEADFUCK + PULSATING CEREBRAL SLIME <br />
                                            LE 18 SEPTEMBRE 2018 À LYON, FRANCE (ROCK N’EAT)</h3>
                                        <hr />
                                        DEADFUCK est un sympathique trio lyonnais qui
                                        célébrait ce mardi sa première année d’existence.
                                        Quel plus bel endroit qu’une scène, locale qui plus
                                        est, pour souffler sa première bougie et présenter
                                        son EP Affliction ? Avec un nom aussi évocateur
                                        que poétique (en hommage à GORGASM), on
                                        sait tout de go qu’ils ne sont pas venus pour
                                        enfiler des perles, mais bien pour nous offrir un
                                        bon petit set de Death/Grind servi par le son au
                                        poil de l’équipe du Rock n’Eat. Un(e) bassiste ?
                                        Pour quoi faire ? Chris à la guitare et Antoine à la
                                        batterie suffisent amplement à mettre un joyeux
                                        bordel auditif mais parfaitement distinct, tandis
                                        que Diégo s’époumone littéralement entre growl
                                        et gruik-gruik, en position de squat, les deux
                                        mains sur le micro, coudes relevés, s’appropriant
                                        progressivement la scène, prenant régulièrement
                                        la parole entre les morceaux. Les titres courts
                                        (of course !) empruntent au Grind son expéditive
                                        brutalité et surtout son chant tout en conservant les
                                        qualités techniques du Death avec des instruments
                                        maîtrisés et des riffs bien plus travaillés, joués très
                                        proprement par un batteur d’un calme olympien
                                        lorsqu’il s’agit de massacrer ses fûts et un gratteux
                                        appliqué et concentré mais qui se lâchera un petit
                                        peu et finira deux morceaux à genoux. Surtout,
                                        ne pas être rebuté par le côté DIY de l’EP, leur
                                        musique s’apprécie davantage dans sa version
                                        live, bien vivante quoi ! Je ne ferai sans doute
                                        jamais l’OBSCENE EXTREME FESTIVAL et j’ai bien
                                        souvent tourné les talons lors de premières parties
                                        de concerts parisiens voire de sets de groupes
                                        confirmés au NETHERLANDS DEATH FEST
                                        officiant dans le même registre, mais la prestation
                                        de DEADFUCK était plutôt convaincante au regard
                                        de leur petite année d’existence et de leur courte
                                        expérience live. Le groupe a pris du plaisir, c’est
                                        une évidence, nous a fait plaisir, c’est une certitude.
                                        Nul besoin d’être un gros amateur du genre, si
                                        vous avez l’occasion de les voir (et il semble bien
                                        que des occasions se présentent prochainement),
                                        faites-le ! Vous passerez un agréable moment
                                        parce que c’est joué proprement et avec sincérité
                                        par une joyeuse bande de potes.

                                    </div>
                                </div>


                            </Tabs.Panel>
                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="10/07/2021" pt="xs">

                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="Pavillon 666">
                            <Tabs.List>
                                <Tabs.Tab value="Pavillon 666">Pavillon 666</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="Pavillon 666" pl="xs">
                                <div className="titrechro">
                                    <p>Pavillon 666</p>
                                    <p>Auteur : Black.Roger</p>
                                </div>
                                <div className="articleLR">
                                    <div className="imgLR"><img src={live10_07_2021} alt="" /></div>
                                    <div className="textLR">
                                        <h3 className="titreLR">PECHE CAPITAL DAY #10 <br />
                                            10/07/2021 À TREPT, FRANCE</h3>
                                        <hr />
                                        DEADFUCK c’est trois gars qui viennent ce soir
                                        nous « blaster » jusqu’à plus soif à l’aide d’un
                                        death/grind à vous plaquer contre les murs de la
                                        cave. Et ce fus le cas avec un hurleur/grogneur
                                        arc-bouté sur son micro, un guitariste aux riffs
                                        saignants et un batteur démolisseur de fûts.
                                        Alors avec eux nous avons immédiatement eu
                                        le grind au « core » et tout se passe bien, c’est
                                        violent, rapide, précis et jusqu’au boutiste quoi
                                        ! Deadfuck nous « parasite » les « cages à miel »
                                        vite et bien sans longueurs, sans faux-semblants.
                                        Les Lyonnais nous avaient manqué durant plus
                                        d’un an et demi et ce soir c’est donc la défonce
                                        sur et devant la scène, on aime, vraiment !
                                    </div>
                                </div>

                            </Tabs.Panel>


                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="16/09/2022" pt="xs">

                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="Pavillon 666">
                            <Tabs.List>
                                <Tabs.Tab value="Pavillon 666">Pavillon 666</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="Pavillon 666" pl="xs">
                                <div className="titrechro">
                                    <p>Pavillon 666</p>
                                    <p>Auteur : Black.Roger</p>
                                </div>
                                <div className="articleLR">
                                    <div className="imgLR"><img src={live16_09_2022} alt="" /></div>
                                    <div className="textLR">
                                        <h3 className="titreLR">SHARKED + FESTERING PROCESS +
                                            DEADFUCK + WARDOGS <br />
                                            16/09/2022 À LYON, FRANCE
                                            (ROCK N’EAT)</h3>
                                        <hr />
                                        Et puis, et puis, DEADFUCK en trio de choc va
                                        continuer de nous susurrer des « berceuse «
                                        extrêmes de chez extrême devant et dans un
                                        public démonté, ambiance ! Tout le monde sur
                                        scène évidemment pour les soutenir sur un titre,
                                        yes !
                                    </div>
                                </div>

                            </Tabs.Panel>


                        </Tabs>
                    </Tabs.Panel>

                    <Tabs.Panel value="12/09/2023" pt="xs">

                        <Tabs color="yellow" variant="pills" radius="md" orientation="vertical" defaultValue="Pavillon 666">
                            <Tabs.List>
                                <Tabs.Tab value="Pavillon 666">Pavillon 666</Tabs.Tab>

                            </Tabs.List>

                            <Tabs.Panel value="Pavillon 666" pl="xs">
                                <div className="titrechro">
                                    <p>Pavillon 666</p>
                                    <p>Auteur : Black.Roger</p>
                                </div>
                                <div className="articleLR">
                                    <div className="imgLR"><img src={Live12_09_2023} alt="" /></div>
                                    <div className="textLR">
                                        <h3 className="titreLR">DEADFUCK + 3RD WAR COLLAPSE <br />
                                            12/09/2023 À LYON, FRANCE
                                            (LE FARMER)</h3>
                                        <hr />
                                        Quand on a le grind au « core », on monte à la Croix-Rousse de Lyon au Farmer. Et ça tombe bien ce Mardi 12 Septembre 2023 car ce soir on nous propose les prestations des Lyonnais de DEADFUCK qui effectuent la release party de leur album « Valeur Chair », mais aussi  nous aurons droit au death/grind brutal des Brésiliens de 3RD WAR COLLAPSE en tournée Européenne actuellement.<br />
                                        Après avoir sorti un premier EP « Affliction » (2018) en guise d'apéritif, le trio Lyonnais DEADFUCK nous sert son plat de résistance, un album appelé « Valeur Chair » en cette fin de torride été 2023. Et ce soir, il nous le présente dans la chaleur du Farmer de Lyon.<br />
                                        Alors place en live de compositions destructrices de neurones, et si vous aimez les images je situerai les déviances de Deadfuck entre le old-school de BLOCKHEADS et les dérapages gore des garçons bouchers de New-York MORTICIAN dans une moindre mesure, les bruits de fond samplés tout simplement.
                                        C'est enragé et engagés dans les textes sur des envois mitrailleuse et lourds de conséquence, entre voix porcine, guitare basse malsaine et batterie plombée, aargh !<br />
                                        Bonne ambiance dans les lieux où l'on s'envoie en l'air aussi, c'est vous dire, quel set !
                                    </div>
                                </div>

                            </Tabs.Panel>


                        </Tabs>
                    </Tabs.Panel>
                </Tabs>
            </div>
            <h2>INTERVIEWS</h2>
            <div className="interview">
                <div className="cardinterview">
                    <img src={lhn} alt="" />
                    <p><span className="titreitv1">Interview de </span><br /><span className="titreitv2">La Horde Noire</span></p>
                    <p>29/11/2020</p>
                    <a href="http://www.lahordenoire-metal.com/interview/deadfuck/deadfuck.html" target="_blank" className="btn_interview">Voir l'interview</a>

                </div>
                <div className="cardinterview">
                    <img src={fbdg} alt="" className="img_fbdg" />
                    <p><span className="titreitv1">Interview de </span><br /><span className="titreitv2">France, Black, Death, Grind</span></p>
                    <p>23/12/2020</p>
                    <a href="https://drive.google.com/file/d/1EJOqtgoRhpVkvnVQoIGVUIsidRjIvZr_/view" target="_blank" className="btn_interview">Voir l'interview</a>
                </div>

                <div className="cardinterview">
                    <img src={gnn} alt="" />
                    <p><span className="titreitv1">Interview de </span><br /><span className="titreitv2">Grind'N'Noizy</span></p>
                    <p>02/2023</p>
                    <a href="http://normandieinvasion.free.fr/images/PDF_GrindNNoizy/GrindNNoizy11.pdf" target="_blank" className="btn_interview">Voir l'interview</a>
                </div>

                <div className="cardinterview">
                    <img src={miv} alt="" />
                    <p><span className="titreitv1">Interview de </span><br /><span className="titreitv2">Metal In Veins</span></p>
                    <p>22/09/2023</p>
                    <a href="https://www.youtube.com/watch?v=aWaauQxpx94&ab_channel=MetalInVeins" target="_blank" className="btn_interview">Voir l'interview</a>
                </div>

                <div className="cardinterview">
                    <img src={raca} alt="" />
                    <p><span className="titreitv1">Interview de </span><br /><span className="titreitv2">Radio Canut Musik-etc</span></p>
                    <p>24/09/2023</p>
                    <a href="https://blogs.radiocanut.org/musik-etc/2023/09/24/musik-etc-du-24-septembre-2023-avec-deadfuck/" target="_blank" className="btn_interview">Voir l'interview</a>
                </div>
            </div>

        </div>
    );
}

export default Press;