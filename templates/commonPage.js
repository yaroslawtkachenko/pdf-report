const childHistory = require('./childHistory');
const { clarikaRegular, roboto } = require('../fonts');

function commonPage(gateways) {
    return `
        <html lang="en">
            <head>
                <title>Gateways</title>
            <style> html { -webkit-print-color-adjust: exact; } </style>
            </head>
            <body>
                <div>
                    
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-right: 20px;">
                  <tbody>
                      <tr style="font-family: Arial; font-size: 16px; line-height: 24px; font-style: normal; font-weight: 700; letter-spacing: 0.05em; text-align: left; border-bottom: 1px solid rgba(0, 0, 0, 0.1); opacity: 0.6">
                        <td>GATEWAY NAME</td>
                        <td>GATEWAY S/N</td>
                        <td>LOCATION NAME</td>
                      </tr>
                      ${gateways.map(
                            (gw) => `
                              <tr style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
                                <td style="vertical-align: baseline; padding: 12px 0 10px;">
                                  <div style="max-width: 130px; font-size: 16px; line-height: 24px; font-weight: 400; word-break: break-all;">${gw.name}</div>
                                </td>
                                <td style="max-width: 150px; vertical-align: baseline; padding: 12px 0 10px">
                                  <div style="font-size: 16px; line-height: 24px; font-weight: 400;">${gw.sn}</div>
                                </td>
                                <td style="max-width: 130px; vertical-align: baseline; padding: 12px 0 10px; word-break: break-all;">
                                  <div style="font-size: 16px; line-height: 24px; font-weight: 400;">${gw.location.name}</div>
                                </td>
                              </tr>
                          `,
                        ).join('\n')}
                  </tbody>
                </table>
            </body>
        </html>
    `;
}

module.exports = commonPage;
