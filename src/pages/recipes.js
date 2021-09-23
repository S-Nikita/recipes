import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../components/Recipes"

const RecipesPage = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }
}) => {
  return (
    <>
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