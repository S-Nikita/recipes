import React, { useEffect } from 'react'
import { graphql } from "gatsby"
import Recipes from "../components/Recipes"
import gsap from 'gsap'
import Transition from '../components/Transitions'
import Navbar from "../components/Navbar"


const RecipesPage = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }
}) => {
  const recipesTransition = gsap.timeline();
  return (
    <>
      <Transition timeline={recipesTransition} />
      <Navbar />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Просмотр рецептов" showNav />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiRecipe(sort: {fields: id, order: DESC}) {
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
export default RecipesPage
