const { footerLogo } = require('../images');

function footerPage() {
    return `
        <div class="footer">
            <div class="footer_pagesWrap">
                ${footerPage.styles}
                <div class="footer_pages">
                    <span class='pageNumber'></span>/<span class='totalPages'></span>
                </div>
                <div class="footer_image">
                    <img class="footer_logo" src=${footerLogo} alt="logo"/>
                </div>
            </div>
        </div>
    `;
}

footerPage.styles = `
    <style>
        .footer {
            width: 100%;
            margin: 0 8px;
        }
        .footer_pagesWrap {
            display: -webkit-flex;
            flex-direction: row;
            text-align: center;
            justify-content: center;
            -webkit-align-items: center;
        }
        .footer_pages {
            font-size: 10px;
            font-weight: 100;
            width: 65%;
            margin-left: 110px;
            text-align: center;
        }
        .footer_logo {
            width: 100px;
            height: 28px;
            margin-right: 20px;
        }
    </style>
`;

module.exports = footerPage;
