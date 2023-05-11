const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    await Promise.all([
        makeBreakfastFromAllStrapiRecipe({ graphql, actions }),
        makeDinnerFromAllStrapiRecipe({ graphql, actions }),
        makeSnackFromAllStrapiRecipe({ graphql, actions }),
        makeAllRecipesFromAllStrapiRecipe({ graphql, actions }),
        paginate({
            graphql,
            actions,
            category: 'Завтрак',
            pathPrefix: '/categories/breakfast/',
            component: path.resolve('./src/pages/categories/breakfast.js'),
        }),
        paginate({
            graphql,
            actions,
            category: 'Основное блюдо',
            pathPrefix: '/categories/dinner/',
            component: path.resolve('./src/pages/categories/dinner.js'),
        }),
        paginate({
            graphql,
            actions,
            category: 'Перекус',
            pathPrefix: '/categories/snacks/',
            component: path.resolve('./src/pages/categories/snacks.js'),
        }),
        paginate({
            graphql,
            actions,
            category: '',
            pathPrefix: '/recipes/',
            component: path.resolve('./src/pages/recipes.js'),
        }),
    ]);

}

async function makeBreakfastFromAllStrapiRecipe({ graphql, actions }) {
    const breakfastPage = path.resolve('./src/pages/categories/breakfast.js');
    const { errors, data } = await graphql(
        `
        {
            allStrapiRecipe(
                sort: {fields: id, order: DESC}, limit: 1000
                filter: {category_item: {elemMatch: {title: {eq: "Завтрак"}}}}
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
    )

    if (errors) {
        console.log(errors);
        throw new Error('There was an error');
    }

    const breakfasts = data.allStrapiRecipe.edges;

    breakfasts.forEach((breakfast, i) => {
        actions.createPage({
            path: i === 0 ? `/breakfast/1` : `/breakfast/${i + 1}`,
            component: breakfastPage,
            context: {
                category: 'breakfast',
                pathPrefix: '/categories/breakfast',
            },
        });
    });
}

async function makeDinnerFromAllStrapiRecipe({ graphql, actions }) {
    const dinnerPage = path.resolve('./src/pages/categories/dinner.js');
    const { errors, data } = await graphql(
        `
        {
            allStrapiRecipe(
                sort: {fields: id, order: DESC}, limit: 1000
                filter: {category_item: {elemMatch: {title: {eq: "Основное блюдо"}}}}
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
    )

    if (errors) {
        console.log(errors);
        throw new Error('There was an error');
    }

    const dinners = data.allStrapiRecipe.edges;

    dinners.forEach((dinner, i) => {
        actions.createPage({
            path: i === 0 ? `/dinner/1` : `/dinner/${i + 1}`,
            component: dinnerPage,
            context: {
                category: 'dinner',
                pathPrefix: '/categories/dinner',
            },
        });
    });
}

async function makeSnackFromAllStrapiRecipe({ graphql, actions }) {
    const snacksPage = path.resolve('./src/pages/categories/snacks.js');
    const { errors, data } = await graphql(
        `
        {
            allStrapiRecipe(
                sort: {fields: id, order: DESC}, limit: 1000
                filter: {category_item: {elemMatch: {title: {eq: "Перекус"}}}}
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
    )

    if (errors) {
        console.log(errors);
        throw new Error('There was an error');
    }

    const snacks = data.allStrapiRecipe.edges;

    snacks.forEach((snack, i) => {
        actions.createPage({
            path: i === 0 ? `/snacks/1` : `/snacks/${i + 1}`,
            component: snacksPage,
            context: {
                category: 'snacks',
                pathPrefix: '/categories/snacks',
            },
        });
    });
}

async function makeAllRecipesFromAllStrapiRecipe({ graphql, actions }) {
    const recipesPage = path.resolve('./src/pages/recipes.js');
    const { errors, data } = await graphql(
        `
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
        `
    )

    if (errors) {
        console.log(errors);
        throw new Error('There was an error');
    }

    const snacks = data.allStrapiRecipe.edges;

    snacks.forEach((recipe, i) => {
        actions.createPage({
            path: i === 0 ? `/recipes/1` : `/recipes/${i + 1}`,
            component: recipesPage,
            context: {
                category: 'recipes',
                pathPrefix: '/recipes',
            },
        });
    });
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