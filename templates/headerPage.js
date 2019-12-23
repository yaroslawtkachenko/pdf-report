const { headerLogo } = require('../images');

function headerPage() {
    return `
        <div class="header">
            ${headerPage.styles}
            <div class="header_wrap">
                <div>
                    <img class="header_logo" src=${headerLogo} alt="logo"/>
                </div>
                <div class="header_titleWrap">
                    <div class="header_title">AppleTree & Gilden Woods - Child History</div>
                </div>
            </div>
        </div>
    `;
}

headerPage.styles = `
    <style>
        .header {
            width: 100%;
            text-align: center;
            margin: 0 8px;
        }
        
        .header_titleWrap {
            width: 80%;
        }
        
        .header_wrap {
            display: -webkit-flex;
            flex-direction: row;
            -webkit-align-items: center;
        }
        
        .header_logo {
            width: 93px;
            height: 33px;
        }
        
        .header_title {
            font-size: 16px;
            font-weight: 800;
        }
        
        .header_subTitle {
            font-size: 10px;
            font-weight: 100;
            margin-bottom: 5px;
        }
    </style>
`;

module.exports = headerPage;
