const createChildHistory = require('../utils/createChildHistory');

function childHistoryCard(historyData, index) {
    const history = createChildHistory(historyData);

    return `
      <div>
        ${childHistoryCard.styles}
        <div class="card_content">
          <div class="card_content__icon">
            ${history.getCurrentType()}
          </div>

          <div class="card_content__text">
            <div class="card_content__type">
              ${history.getCurrentType()}
            </div>
            ${history.generatePayloadContent()}

            <div class="card_content__teacherName">
              <span>by </span>
              <span>${history.getTeacherName()}</span>
            </div>
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
    .card_content {
        display: flex;
        border: 2px solid rgba(220,14,14,0.15);
        border-radius: 5px;
        /*box-shadow: 0 0 5px 1px rgba(220,14,14,0.15);*/
        margin: 0 20px 30px 20px;
        background: rgb(241, 241,241);
        min-height: 90px;
        align-items: center;
        justify-content: space-between;
    }
    .card_content__text {
        width: 65%;
        border-right: 2px solid;
        color: rgb(74, 74,74);
        font-size: 14px;
        font-weight: normal;
    }
    .card_content__type {
        font-size: 24px;
        font-weight: bold;
    }
    .card_content__icon {
        width: 14%;
        text-align: center;
    }
    .card_content__time {
        width: 15%;
        text-align: center;
    }
  </style>
`;

module.exports = childHistoryCard;
