import React from 'react'

function ContactPage() {
    return (
        <>
            <main>
                <section className="contact-page">
                    <h2>Контакты</h2>
                    <div className="wrapper">
                        <h3>Свяжитесь со мной</h3>
                        <p className="contact-text">Unicorn prism migas, cronut mixtape drinking vinegar brunch vape. Meggings godard pop-up, wolf listicle shaman jianbing vice. Blog snackwave tilde, thundercats austin asymmetrical ugh cardigan. Quinoa tote bag whatever, hammock vegan wolf glossier street art ethical hoodie selvage cliche vice twee. Bushwick yr wayfarers authentic woke.</p>
                        <div className="contact-info">
                            <form action="" className="contact-form">
                                <div className="input-block" tabIndex="1">
                                    <input type="text" className="form-control name" required />
                                    <span>Имя</span>
                                </div>
                                <div className="input-block" tabIndex="2">
                                    <input type="text" className="form-control email" required />
                                    <span>Электронный адрес</span>
                                </div>
                                <div className="input-block" tabIndex="3">
                                    <input type="text" className="form-control subject" required />
                                    <span>Тема сообщения</span>
                                </div>
                                <div className="input-block text" tabIndex="4">
                                    <textarea type="text" className="form-control text" required />
                                    <span>Сообщение</span>
                                </div>
                            </form>
                            <button className="btn btn-form" type="submit">Отправить</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactPage
