import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <>
            <main>
                <section className="about-page">
                    <h2>О проекте</h2>
                    <div className="about-wrapper">
                        <div className="about_author-img">
                            <StaticImage src="../assets/about_img_2.jpg" alt="The photo of project's author" placeholder="blurred" />
                        </div>
                        <div className="wrapper-about_author">
                            <h3>Позвольте представиться</h3>
                            <p>
                                Привет, меня зовут Никита!
                                <br />
                                Создавая данный проект, я хотел показать, что процесс похудения, не должен приносить страдания.
                                <br />
                                Будучи обычным парнем, работающим в офисе, у меня получилось достичь результата, которым горжусь.
                                <br />
                                И я искренне надеюсь, что представленная на сайте информация поможет тебе в достижении твоих целей!
                            </p>
                        </div>
                        <div className="wrapper-about_project">
                            <h3>Цель проекта</h3>
                            <p>
                                Для того, чтобы похудеть, необходимо находиться в дефиците калорий &mdash; факт, который известен многим.
                                Этого эффекта можно достичь разными способами: от интервального голодания
                                до отказа от определенных категорий продуктов и макроэлементов (многочисленные диеты, такие как: кето,
                                палеолитическая, высокоуглеводная и т.д).
                                <br />
                                Однако, перечисленные выше способы являются слишком ограничивающими,
                                что сводит их эффективность в долгосрочной перспективе к нулю, также помимо этого,
                                они способны привести к ухудшению состояния здоровья.
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Но есть способ, который подойдет большинству людей &mdash; отслеживание потребляемых калорий.
                                И любой, кто занимался этим хотя бы раз в жизни знает, что это далеко не самая легкая задача.
                                Так как постоянно приходится идти на такие компромиссы как: позволить себе съесть лишний шоколадный донат и быть голодным до конца дня
                                или есть "скучную" низкокалорийную пищу, отказывая себе в более вкусной калорийной еде.
                                И все это с целью уложиться в суточную норму потребляемых калорий для поддержания дефицита.
                                Не говоря уже о том, что нужно соблюдать норму потребляемого белка, если помимо похудения,
                                вашей целью в процессе является сохранить как можно больше мышечной массы и дольше испытывать чувство насыщения после приема пищи.
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Однако, не стоит опускать руки и бросать мечту о совершенствовании себя и своего тела.
                                Ведь здесь ты сможешь найти множество рецептов, являющиеся низкокалорийными и высокобелковыми аналогами популярных блюд.
                                Будь это бельгийские вафли, пицца или мороженное.
                                И совершенно неважно, какая у тебя на данном этапе цель, набрать мышечную массу
                                или похудеть, здесь ты найдешь именно то, что тебе нужно для ее достижения!
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutPage
