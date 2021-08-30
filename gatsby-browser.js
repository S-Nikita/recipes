require('./src/css/main.css')
const React = require('React');
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element, props }) => {
    return (<Layout {...props}>
        {element}
    </Layout>)
}