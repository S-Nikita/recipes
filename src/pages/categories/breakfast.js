import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../../components/Recipes"

const Breakfast = ({
  data: {
    allStrapiRecipe: { nodes: recipes, totalCount }
  }
}) => {
  return (
    <>
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Завтрак" showNav category_title="Завтрак" itemLayout={totalCount} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Завтрак"}}}}
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
export default Breakfast
