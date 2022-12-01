import React, { useEffect } from 'react'
import { graphql } from "gatsby"
import Recipes from "../../components/Recipes"
import gsap from 'gsap'
import Transition from '../../components/Transitions'
import Navbar from "../../components/Navbar"

const Dinner = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }
}) => {
  const dinner = gsap.timeline()
  return (
    <>
      <Transition timeline={dinner} />
      <Navbar />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Основные блюда" showNav category_title="Основные блюда" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Основное блюдо"}}}}
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
export default Dinner
