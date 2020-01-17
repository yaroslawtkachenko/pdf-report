const childHistory = require('./childHistory');
const { clarikaRegular, roboto } = require('../fonts');

function commonPage(childData) {
    return `
        <html lang="en">
            <head>
                <title>PDF report</title>
                <style>
                    @font-face {
                        font-family: 'Clarika';
                        src: url(${clarikaRegular}) format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                    @font-face {
                        font-family: 'Roboto';
                        src: url(${roboto}) format('truetype');
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
