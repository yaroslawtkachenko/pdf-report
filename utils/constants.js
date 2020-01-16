const headerPage = require('../templates/headerPage');
const footerPage = require('../templates/footerPage');
const { clarikaRegular, robotoRegular } = require('../fonts');

let cssb = [];
cssb.push('<style>');
cssb.push(`@font-face { font-family: 'Clarika'; src: url(${clarikaRegular}) format('truetype'); font-weight: normal; font-style: normal; } * { font-family: 'Clarika'; }`);
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
        top: "125px",
        bottom: "100px",
    },
};

module.exports = {
    config,
};
