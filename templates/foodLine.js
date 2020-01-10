function foodLine(dish) {
    return `
        ${foodLine.styles}
        <div class="foodLine_wrap flex">
            <div class="foodLine_name flex">
                <div>${dish.name}</div>
                <div class="foodLine_name_value">${dish.volume * 25}%</div>
            </div>
            <div class="foodLine_progress flex">
                <div class="foodLine_progress_item" style="background: ${dish.volume >= 1 ? `rgb(239, 61, 111)` : 'gainsboro' }"></div>
                <div class="foodLine_progress_item" style="background: ${dish.volume >= 2 ? `rgb(239, 61, 111)` : 'gainsboro' }"></div>
                <div class="foodLine_progress_item" style="background: ${dish.volume >= 3 ? `rgb(239, 61, 111)` : 'gainsboro' }"></div>
                <div class="foodLine_progress_item" style="background: ${dish.volume >= 4 ? `rgb(239, 61, 111)` : 'gainsboro' }"></div>
            </div>
        </div>
    `;
}

foodLine.styles = `
    <style>
        .flex {
            display: flex;
        }
        .foodLine_wrap {
            width: 250px;
            flex-direction: column;
            margin: 20px 0 10px 0;
        }
        .foodLine_name {
            justify-content: space-between;
            margin-bottom: 5px;
        }
        .foodLine_name_value {
            color: rgb(112, 44, 145);
            font-size: 16px;
        }
        .foodLine_progress_item {
            background: gainsboro;
            width: 50px;
            height: 10px;
            border-left: 1px solid white;
        }
        .foodLine_progress :first-child {
            border-radius: 5px 0 0 5px;
        }
        .foodLine_progress :last-child {
            border-radius: 0 5px 5px 0;
        }
    </style>
`;

module.exports = foodLine;
