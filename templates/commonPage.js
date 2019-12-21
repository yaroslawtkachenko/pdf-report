const childHistory = require('./childHistory');

function commonPage({
    legendData,
    studentsData,
}) {
    return `
        <html lang="en">
            <head>
                <title>PDF report</title>
            </head>
            <body>
                ${childHistory(studentsData, legendData)}
            </body>
        </html>
    `;
}

module.exports = commonPage;
