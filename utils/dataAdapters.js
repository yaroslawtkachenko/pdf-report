const { getRandomColor, getShortName } = require('./helpers');

class DataAdapter {
    constructor() {
        this.selectedDate = '';
        this.currentRoom = null;
        this.children = [];
        this.teachers = [];
        this.totals = [];
        this.rooms = [];
    }

    init({
         selectedDate,
         currentRoom,
         children,
         teachers,
         totals,
         rooms,
     }) {
        this.selectedDate = selectedDate;
        this.currentRoom = currentRoom;
        this.children = children;
        this.teachers = teachers;
        this.totals = totals;
        this.rooms = rooms;

        return this;
    }

    getParseData() {
        return ({
            headerData: this.parseHeaderInfo(),
            studentsData: this.children,
            teachersData: this.teachers,
            totalData: this.totals,
            legendData: this.parseLegendData(),
        });
    }

    parseHeaderInfo() {
        const date = this.selectedDate;
        const room = this.currentRoom;

        return ({
            roomName: room.name || 'Room name is empty',
            date: date || 'Room date is empty',
        });
    }
}

module.exports = new DataAdapter();
