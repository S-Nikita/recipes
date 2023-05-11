import React from 'react'
import { graphql } from "gatsby"
import Recipes from "../../components/Recipes"
import gsap from 'gsap'
import Transition from '../../components/Transitions'
import Pager from '../../components/Pager'

const Dinner = ({
  data: {
    allStrapiRecipe: { nodes: recipes }
  }, pageContext
}) => {
  const dinner = gsap.timeline()
  return (
    <>
      <Transition timeline={dinner} />
      <main>
        <section className="recipes-page">
          <Recipes recipes={recipes} title="Основные блюда" showNav category_title="Основные блюда" />
          <Pager currentPage={pageContext.currentPage} numPages={pageContext.numPages} categoryLink="/categories/dinner" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query Dinner($skip: Int!, $limit: Int!)
  {
  allStrapiRecipe(
    sort: {fields: id, order: DESC}
    filter: {category_item: {elemMatch: {title: {eq: "Основное блюдо"}}}}
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
export default Dinner
