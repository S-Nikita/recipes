import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../components/Recipes"
import gsap from 'gsap'
import Transition from '../components/Transitions'
import Navbar from "../components/Navbar"
import Pager from "../components/Pager"


const RecipesPage = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  },
  pageContext
}) => {
  const recipesTransition = gsap.timeline();
  console.log(pageContext)
  return (
    <>
      <Transition timeline={recipesTransition} />
      <Navbar />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Просмотр рецептов" showNav />
          <Pager currentPage={pageContext.currentPage} numPages={pageContext.numPages} categoryLink="/recipes" />
        </section>

      </main>
    </>
  )
}

export const query = graphql`
  query Recipes($skip: Int!, $limit: Int!)
  {
    allStrapiRecipe(
      sort: {fields: id, order: DESC}
      limit: $limit
      skip: $skip
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
export default RecipesPage
