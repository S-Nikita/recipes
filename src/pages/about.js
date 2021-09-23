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
                                Taiyaki tbh knausgaard pinterest. Viral fingerstache raw denim kogi, you probably haven't heard of them vaporware pop-up brooklyn.
                                Raw denim umami offal, ethical faschicharrones vice sartorial mustache.Hammock hexagon selvage sriracha small batch distillery taiyaki farm-to-table hella kitsch. Crucifix humblebrag flexitarian literally hammock street art authentic cronut pork belly. Blue bottle
                            </p>
                        </div>
                        <div className="wrapper-about_project">
                            <h3>Цель проекта</h3>
                            <p>
                                Taiyaki tbh knausgaard pinterest. Viral fingerstache raw denim kogi, you probably haven't heard of them vaporware pop-up brooklyn. Raw denim umami offal, ethical fashion axe adaptogen edison bulb occupy cloud bread jianbing brooklyn vice photo booth mlkshk. Cold-pressed mumblecore sartorial tacos banjo intelligentsia keffiyeh locavore you proheard of them fanny pack try-hard yr poke VHS. Meggings taiyaki truffaut cardigan shaman chicharrones vice sartorial mustache. Hammock hexagon selvage sriracha small batch distillery taiyaki farm-to-table hella kitsch.
                                Hexagon thu party gentrify.
                                <br />
                                Mustache intelligentsia butcher literally plaid ugh master cleanse food truck paleo prism tofu organic YOLO.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutPage
