import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../components/Recipes"
import gsap from 'gsap'
import Transition from '../components/Transitions'
import Pager from '../components/Pager'
import SEO from "../components/Seo"

const Snacks = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }, pageContext
}) => {
  const snacks = gsap.timeline()
  return (
    <>
      <SEO title="Перекус"/>
      <Transition timeline={snacks} />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Перекус" showNav category_title="Перекус" />
          <Pager currentPage={pageContext.currentPage} numPages={pageContext.numPages} categoryLink="/categories/snacks" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query Snacks($skip: Int!, $limit: Int!)
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Перекус"}}}}
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
export default Snacks
