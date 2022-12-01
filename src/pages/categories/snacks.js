import React, { useEffect } from 'react'
import { graphql } from "gatsby"
import Recipes from "../../components/Recipes"
import gsap from 'gsap'
import Transition from '../../components/Transitions'
import Navbar from "../../components/Navbar"

const Snacks = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }
}) => {
  const snacks = gsap.timeline()
  return (
    <>
      <Transition timeline={snacks} />
      <Navbar />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Перекус" showNav category_title="Перекус" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Перекус"}}}}
  ) {
    nodes {
      calories_100
      category_item {
        id
        title
      }
      difficulty
      id
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      title
      time
      slug
    }
    totalCount
    distinct(field: id)
  }
}
`
export default Snacks
