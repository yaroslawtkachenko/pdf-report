const childHistoryCard = require('../templates/childHistoryCard');

function childHistory(childHistoryData) {
    return `
        <div class="childHistory_wrap">
            ${childHistory.styles}
            ${childHistoryData.events.length !== 0 ? childHistoryData.events.map((event, index) => childHistoryCard({
                childName: childHistoryData.name + childHistoryData.lastName,
                teacherName: event.teacherName,
                type: event.type,
                payload: event.payload,
                time: event.createdAt,
            }, index)).join('') : ''}
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
