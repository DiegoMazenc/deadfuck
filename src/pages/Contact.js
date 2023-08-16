import Formulaire from "../components/Formulaire";
import logotrans from '../img/Logo_v2_transparent.png';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div>
            <div class="margintop"></div>
            <div class="form">
                <div class="contact_fbdg_mob">
                    <p>To contact our label "France, Black, Death, Grind" :</p>
                    <p class="mail_fbdg">france.black.death.grind@gmail.com</p>
                </div>
                <div class="block_form"><Formulaire /></div>
                <div class="aside_form">
                    <img src={logotrans} alt="" />
                    <h2>Contact us</h2>
                    <p>Do not hesitate to send us a message for any request for information or for the pleasure of contacting us.
                        <br /><br />We will do our best to respond to you promptly.</p>
                    <div class="contact_fbdg">
                        <p>To contact our label "France, Black, Death, Grind" :</p>
                        <p class="mail_fbdg">france.black.death.grind@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
