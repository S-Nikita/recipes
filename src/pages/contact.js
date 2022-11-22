import React from 'react'
import emailjs from 'emailjs-com'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import { useState } from 'react'

export default function ContactPage() {
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
            <main>
                <section className="contact-page">
                    <h2>Контакты</h2>
                    <div className="wrapper">
                        <h3>Свяжитесь со мной</h3>
                        <p className="contact-text">Unicorn prism migas, cronut mixtape drinking vinegar brunch vape. Meggings godard pop-up, wolf listicle shaman jianbing vice. Blog snackwave tilde, thundercats austin asymmetrical ugh cardigan. Quinoa tote bag whatever, hammock vegan wolf glossier street art ethical hoodie selvage cliche vice twee. Bushwick yr wayfarers authentic woke.</p>
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
                </section>
            </main>
            <NotificationContainer />
        </>
    )
}



