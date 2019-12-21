function childHistory(studentsData) {
    return `
        <div>
            ${childHistory.styles}
        </div>
    `;
}

childHistory.styles = `
    <style>
        .primeRow > * {
            font-weight: bold;
        }
        .timelinesContainer {
          position: relative;
          width: 100%;
          height: 100%;
        }
    </style>
`;



module.exports = childHistory;
