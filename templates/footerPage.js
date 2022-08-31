function footerPage() {
    return `
        <div class="footer"">
            ${footerPage.styles}
            <div class="copyright" style="text-align: center;margin-top: 48px;">
              <div class="dash" style="width: 64px; border-top: 2px dashed #134ac6; margin: 0 auto;">&nbsp;</div>
              <div class="text" style="margin-top: 20px; font-family: Arial; font-style: normal; font-weight: normal; font-size: 16px; line-height: 24px; color: #555555; margin-bottom: 16px;">
                © 2020 - {{year}} RAKwireless Technology Limited. All Rights Reserved.
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
    </style>
`;

module.exports = footerPage;
