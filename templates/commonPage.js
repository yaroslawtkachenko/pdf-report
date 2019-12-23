const childHistory = require('./childHistory');

function commonPage(childData) {
    return `
        <html lang="en">
            <head>
                <title>PDF report</title>
            </head>
            <body>
                ${childHistory(childData)}
            </body>
        </html>
    `;
}

module.exports = commonPage;
