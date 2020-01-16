const childHistory = require('./childHistory');
const { clarikaRegular, robotoRegular } = require('../fonts');

function commonPage(childData) {
    return `
        <html lang="en">
            <head>
                <title>PDF report</title>
                <style>
                    @font-face {
                        font-family: 'Clarika';
                        src: url(${clarikaRegular}) format('truetype'), url(${robotoRegular}) format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                    body {
                      font-family: 'Clarika';
                    }
                </style>
            </head>
            <body>
                ${childHistory(childData)}
            </body>
        </html>
    `;
}

module.exports = commonPage;
