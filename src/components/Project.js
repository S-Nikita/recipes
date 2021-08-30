import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Project = () => {
    return (
        <section className="project">
            <div className="project-body">
                <div className="picture">
                    <div className="about-img">
                        <StaticImage src="../assets/dessert.png" alt="donuts" />
                    </div>
                    <div className="shape">
                        <img />
                    </div>
                </div>
                <article className="project-description">
                    <h2>О проекте</h2>
                    <p>I'm baby wayfarers helvetica subway tile iPhone umami lomo man bun trust fund wayfarers vegan blog shoreditch master cleanse williamsburg pabst.
                        Crucifix humblebrag flexitarian literally hammock street art authentic cronut pork belly.
                        Blue bottle salvia post-ironic waistcoat, trust fund locavore heirloom vinyl thundercats letterpress offal.
                        Intelligentsia tote bag banh mi butcher. Kickstarter jean shorts try-hard, adaptogen pok pok pour-over occupy cardigan brooklyn.
                    </p>
                    <Link to="/about" className="btn">подробнее</Link>
                </article>
            </div>
        </section>
    )
}

export default Project
