const createChildHistory = require('../utils/createChildHistory');

function childHistoryCard(historyData, index) {
    const history = createChildHistory(historyData);

    return `
      <div class="card_wrap">
        ${childHistoryCard.styles}
        ${index !== 0 ? `<div class="card_separator"></div>` : ''}
        <div class="card_content_wrap">
          <div class="card_content__icon-wrap">
              <div class="card_content__icon">
                ${history.getIconByType()}
              </div>
          </div>

          <div class="card_content__text">
            <div class="card_content__type">
              ${history.getCurrentType()}
            </div>
            ${history.generatePayloadContent()}
          </div>

          <div class="card_content__time">
            ${history.getCurrentTime()}
          </div>
        </div>
      </div>
  `;
}

childHistoryCard.styles = `
  <style>
    .card_wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(74, 74,74);
    }
    .card_separator {
        width: 4px;
        height: 30px;
        background: rgb(241, 241,241);
    }
    .card_content_wrap {
        display: flex;
        width: 90%;
        border: 2px solid rgba(220,14,14,0.37);
        border-radius: 5px;
        margin: 0 20px;
        background: rgb(241, 241,241);
        min-height: 90px;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }
    .card_content__text {
        width: 65%;
        color: rgb(74, 74,74);
        font-size: 14px;
        font-weight: normal;
    }
    .card_content__type {
        font-size: 24px;
        font-weight: bold;
    }
    .card_content__icon-wrap {
        width: 14%;
        text-align: -webkit-center;
    }
    .card_content__icon {
        background: rgb(246, 155, 174);
        width: 48px;
        height: 48px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: space-around;
    }
    .card_content__time {
        width: 15%;
        text-align: center;
        border-left: 2px solid rgba(74, 74,74, 0.75);
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  </style>
`;

module.exports = childHistoryCard;
