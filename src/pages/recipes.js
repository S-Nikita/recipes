import React from 'react'
import { graphql } from "gatsby"
import Recipe from "../components/Recipe"

const RecipesPage = () => {
    return (
        <>
            <main>
                <section className="recipes-page">
                    <Recipe />
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
        calories_portion
        carbs_100
        carbs_portion
        description
        fat_100
        fat_portion
        direction_item {
          direction_item
          id
        }
        ingridient_item {
          ingridients_item
          id
        }
        protein_100
        protein_portion
      }
      totalCount
      distinct(field: id)
    }
  }
`

export default RecipesPage
