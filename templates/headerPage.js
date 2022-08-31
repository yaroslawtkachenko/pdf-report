const { headerLogo } = require('../images');

function headerPage() {
    return `
      <div class="header">
        ${headerPage.styles}
        <img src=${headerLogo} alt="logo"/>
      </div>
    `;
}

headerPage.styles = `
    <style>
         html {
         -webkit-print-color-adjust: exact;
         }

        .header {
            width: 100%;
            margin-top: -20px;
            background: #134ac6;
            padding: 24px 20px;
        }
    </style>
`;

module.exports = headerPage;
