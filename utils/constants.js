const headerPage = require('../templates/headerPage');
const footerPage = require('../templates/footerPage');

let cssb = [];
cssb.push('<style>');
cssb.push('* { font-family: "DejaVu Serif" }');
cssb.push('</style>');

const css = cssb.join('');

const config = {
    path: 'resultPDF/childHistory.pdf',
    format: 'Legal',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: css + headerPage(),
    footerTemplate: css + footerPage(),
    margin: {
        top: "95px",
        bottom: "100px",
    },
};

module.exports = {
    config,
};
