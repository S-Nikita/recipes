require('./src/css/main.css')
const React = require("react");
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element, props }) => {
    return (<Layout {...props}>
        {element}
    </Layout>)
}