import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import gsap from 'gsap';
import Transition from '../components/Transitions';
import socialLinks from '../constants/social_links'
import SEO from "../components/Seo"

export default function ContactPage() {
    const contact = gsap.timeline();
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dacov7k', 'template_4y9jh3f', e.target, '39dYl6dA7Ut2K0rRo')
            .then((result) => {
                NotificationManager.success('Сообщение отправлено!', 'Успешно', 2000);
            }, (error) => {
                NotificationManager.error('Пожалуйста, повторите попытку позже', 'Ошибка');
            });
        e.target.reset();
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleChange = e => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        };

        if (!e.target.value) {
            setError(null);
        };

        setMessage(e.target.value);
    };

    return (
        <>
            <SEO title="Контакты"/>
            <Transition timeline={contact} />
            <main className='contacts'>
                <section className="contact-page">
                    <div className="wrapper">
                        <h2>Контакты</h2>
                        <div className="main-wrapper">
                            <h3>Свяжитесь со мной</h3>
                            <p className="contact-text">
                                Если у тебя есть какие-либо вопросы, пожелания или, ты хочешь предложить свой рецепт. Не стесняйся связаться со мной любым удобным для тебя способом: заполнив форму ниже или в соц. сетях.
                                <br/>
                                И я постараюсь ответить с первой космической скоростью.
                            </p>
                            <div className="social-links" id='contacts-link'>
                                    {socialLinks.map(link => {
                                            return (
                                                    <a href={link.url} key={link.id} className="social-link">
                                                            {link.icon}
                                                    </a>
                                            )
                                    })}
                            </div>
                            <div className="contact-info">
                                <form onSubmit={sendEmail} className="contact-form">
                                    <div className="input-block" tabIndex="1">
                                        <input type="text" className="form-control name" name='from_name' required />
                                        <span>Имя</span>
                                    </div>
                                    <div className={`${!error ? 'input-block' : 'input-block error'}`} tabIndex="2">
                                        <input type="text" className="form-control email" name='reply_to' value={message} onChange={handleChange} required />
                                        <span>Электронный адрес</span>
                                    </div>
                                    <div className="input-block" tabIndex="3">
                                        <input type="text" className="form-control subject" name='subject' required />
                                        <span>Тема сообщения</span>
                                    </div>
                                    <div className="input-block text" tabIndex="4">
                                        <textarea type="text" className="form-control text" name='message' required />
                                        <span>Сообщение</span>
                                    </div>
                                    <button className="btn btn-form" type="submit">Отправить</button>
                                </form>
                            </div>  
                        </div>
                    </div>
                </section>
            </main>
            <NotificationContainer />
        </>
    )
}



