const childHistoryCard = require('../templates/childHistoryCard');

function childHistory(childHistoryData) {
    return `
        <div class="childHistory_wrap">
            ${childHistory.styles}
            ${childHistoryData.map((history, index) => childHistoryCard({
                childName: history.name + history.lastName,
                teacherName: history.teacherName,
                type: history.type,
                payload: history.payload,
                time: history.createdAt,
            }, index)).join('')}
        </div>
    `;
}

childHistory.styles = `
    <style>
        .childHistory_wrap {
            page-break-inside: avoid;
        }
        @media print  
        {
            div {
                page-break-inside: avoid;
            }
        }
    </style>
`;

module.exports = childHistory;
