import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import '../styles/Formulaire.css';


const Formulaire = () => {
    const form = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        category: 'Status',
        object: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g6vbrxg', 'template_uk2zfpq', form.current, 'TgWbofe695QQDTuXq')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent, we will answer you as soon as possible!");
                setIsFormSubmitted(true);
                setFormData({
                    user_name: '',
                    user_email: '',
                    category: 'Status',
                    object: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert("A problem has occurred 😒 You can contact us directly with our email: deadf.booking@gmail.com");
            });
    };

    return (



        <form ref={form} onSubmit={sendEmail}>
            <div className="form_element">
                <label>Name *</label>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} placeholder='Enter your Name' required/>
            </div>
            <div className="form_element">
                <label>E-mail*</label>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} placeholder='Enter your Mail' required/>
            </div>
            <div className="form_element">
                <label>Status </label>
                <select name="category" value={formData.category} onChange={handleInputChange} required>
                    <option value="Status">-- Choose your status --</option>
                    <option value="Booker">Booker</option>
                    <option value="Band">Band</option>
                    <option value="Label">Label</option>
                    <option value="Press">Press</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form_element">
                <label>Object *</label>
                <input type="text" name="object" value={formData.object} onChange={handleInputChange} placeholder='Enter your Object' required/>
            </div>
            <div className="form_element">
                <label>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required/>
            </div>
            <div className="btn_form">
                <input type="submit" value="Send" />
            </div>
        </form>

    );
};

export default Formulaire;