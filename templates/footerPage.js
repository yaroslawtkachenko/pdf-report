const { footerLogo } = require('../images');

function footerPage() {
    return `
        <div class="footer">
            <div class="footer_pagesWrap">
                ${footerPage.styles}
                <div class="footer_pages"><span class='pageNumber'>Hi</span>/<span class='totalPages'></div>
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
            width: 97%;
        }
        .footer_pagesWrap {
            display: -webkit-flex;
            flex-direction: row;
            text-align: center;
            -webkit-align-items: center;
        }
        .footer_pages {
            font-size: 10px;
            font-weight: 100;
            width: 85%;
        }
        .footer_logo {
            width: 100px;
            height: 28px;
        }
    </style>
`;

module.exports = footerPage;
