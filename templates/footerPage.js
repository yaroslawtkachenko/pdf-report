const { footerLogo } = require('../images');

function footerPage() {
    return `
        <div class="tableWrap">
            <div class="footer_pagesWrap">
                <div class="footer_pages"><span class='pageNumber'></span>/<span class='totalPages'></div>
                <div>
                    <img class="footer_logo" src=${footerLogo} alt="logo"/>
                </div>
            </div>
        </div>
    `;
}

footerPage.styles = `
    <style>
        .footer_pagesWrap {
            display: -webkit-flex;
            flex-direction: row;
            text-align: center;
            -webkit-align-items: center;
        }
        .footer_pages {
            font-size: 10px;
            font-weight: 100;
            width: 90%;
        }
        .footer_logo {
            width: 100px;
            height: 28px;
        }
    </style>
`;

module.exports = footerPage;
