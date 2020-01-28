const { headerLogo } = require('../images');
const { clarikaRegular, roboto } = require('../fonts');

function headerPage() {
    console.log(process.cwd());
    return `
        <div class="header">
            ${headerPage.styles}
            <div class="header_wrap">
                <div>
                    <img class="header_logo" src=${headerLogo} alt="logo"/>
                </div>
                <div class="header_titleWrap">
                    <div class="header_title">Child History Report</div>
                    <div class="header_title">AppleTree & Gilden Woods</div>
                    <div class="header_title">John Smith <span class="header_time">12/21/19</span></div>
                </div>
            </div>
        </div>
    `;
}

headerPage.styles = `
    <style>
        @media print {
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
        }
        .header {
            width: 100%;
            text-align: center;
            margin: 0 8px;
            font-family: 'Clarika';
        }
        
        .header_time {
            font-family: 'Roboto', sans-serif;
        }
        
        .header_titleWrap {
            width: 65%;
            font-size: 16px;
            font-weight: 800;
        }
        
        .header_wrap {
            display: -webkit-flex;
            flex-direction: row;
            -webkit-align-items: center;
        }
        
        .header_logo {
            width: 93px;
            height: 33px;
            margin-left: 15px;
        }
        
        .header_subTitle {
            font-size: 10px;
            font-weight: 100;
            margin-bottom: 5px;
        }
    </style>
`;

module.exports = headerPage;
