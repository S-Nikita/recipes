import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../components/Recipes"
import Transition from '../components/Transitions'
import gsap from 'gsap'
import Pager from '../components/Pager'
import SEO from "../components/Seo"

const Breakfast = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }, pageContext
}) => {
  const breakfast = gsap.timeline();
  console.log(pageContext)
  return (
    <>
      <SEO title="Завтраки"/>
      <Transition timeline={breakfast} />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Завтрак" showNav category_title="Завтрак" />
          <Pager currentPage={pageContext.currentPage} numPages={pageContext.numPages} categoryLink="/categories/breakfast" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query Breakfst($skip: Int!, $limit: Int!)
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Завтрак"}}}}
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
export default Breakfast
