import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Project from "../components/Project"
import Category from "../components/Category"
import Recipes from "../components/Recipes"
import SEO from "../components/Seo"
import "../css/main.css"

const Index = ({ data }) => {
  const { allStrapiRecipe: { nodes: recipes } } = data;
  return (
    <>
      <SEO title="Главная"/>
      <main className="index">
        <Hero />
        <Project />
        <Category />
        <Recipes recipes={recipes} title="Последние рецепты" showLink />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiRecipe(sort: {fields: id, order: DESC}, limit: 4) {
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

export default Index
