const headerPage = require('../templates/headerPage');
const footerPage = require('../templates/footerPage');

let cssb = [];
cssb.push('<style>');
cssb.push('* { font-family: "DejaVu Serif" }');
cssb.push('</style>');

const css = cssb.join('');

const config = (headerData, totalData, legendData) => ({
    path: 'resultPDF/NameToFacePDF.pdf',
    format: 'Tabloid',
    printBackground: true,
    displayHeaderFooter: true,
    landscape: true,
    headerTemplate: css + headerPage(headerData),
    footerTemplate: css + footerPage(totalData, legendData),
    margin: {
        top: "95px",
        bottom: "220px",
    },
    scale: 2,
});

module.exports = {
    config,
};
