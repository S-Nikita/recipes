const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    await Promise.all([
        paginate({
            graphql,
            actions,
            category: 'Завтрак',
            pathPrefix: '/categories/breakfast/',
            component: path.resolve('./src/templates/breakfast-template.js'),
        }),
        paginate({
            graphql,
            actions,
            category: 'Основное блюдо',
            pathPrefix: '/categories/dinner/',
            component: path.resolve('./src/templates/dinner-template.js'),
        }),
        paginate({
            graphql,
            actions,
            category: 'Перекус',
            pathPrefix: '/categories/snacks/',
            component: path.resolve('./src/templates/snacks-template.js'),
        }),
        paginate({
            graphql,
            actions,
            category: '',
            pathPrefix: '/recipes/',
            component: path.resolve('./src/templates/recipes-template.js'),
        }),
    ]);

}


async function paginate({
    graphql,
    actions,
    category,
    pathPrefix,
    component,
}) {
    console.log(category)
    graphqlStr = !category ? `
        {
            allStrapiRecipe(
                sort: {fields: id, order: DESC}, limit: 1000
                ) {
                totalCount
                distinct(field: id)
                edges {
                    node {
                        id
                    }
                }
            }
        }
        ` :
        `
        {
            allStrapiRecipe(
                sort: {fields: id, order: DESC}, limit: 1000
                filter: {category_item: {elemMatch: {title: {eq: "${category}"}}}}
                ) {
                totalCount
                distinct(field: id)
                edges {
                    node {
                        id
                    }
                }
            }
        }
        `
    const { errors, data } = await graphql(graphqlStr)


    if (errors) {
        console.log(errors);
        throw new Error('There was an error');
    }

    const recipes = data.allStrapiRecipe.edges;
    const recipesPerPage = 12;
    const numPages = Math.ceil(recipes.length / recipesPerPage);
    console.log(recipes);

    Array.from({ length: numPages }).forEach((_, i) => {
        // for each page, use the createPages api to dynamically create that page
        actions.createPage({
            path: `${pathPrefix}${i + 1}`,
            component,
            context: {
                limit: recipesPerPage,
                skip: i * recipesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `allStrapiRecipe`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}