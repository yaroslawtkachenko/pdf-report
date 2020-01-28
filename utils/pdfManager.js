const puppeteer = require('puppeteer');

const { config } = require('./constants');
const { timeoutPromise } = require('./helpers');
const commonPage = require('../templates/commonPage');
const DataAdapter = require('./dataAdapters');
const ReportSaver = require('./reportSaver');
const {
  selectedDate,
  children,
} = require('./mockData'); // Mock for testing create flow. Remove after fetching real data

const data = {
    "date": "2019-11-28",
    "name": "Rye",
    "lastName": "Baxter",
    "schoolName": "AppleTree Monroe",
    "events": [
        {
            "payload": "{\"roomId\":\"16da0896-775e-463b-8274-75f88f6cd563\",\"roomName\":\"Museum\"}",
            "teacherName": "Kami",
            "roomId": "285",
            "createdAt": "2019-11-28T10:45:34.441Z",
            "childId": "18323",
            "teacherId": "19670",
            "id": "007eacf3-f42d-4e78-8858-c241c0dbe579",
            "type": "childMove"
        }
    ]
};

class PDFManager {
    constructor() {
        this.dataAdapter = DataAdapter;
        this.reportSaver = ReportSaver;
    }

    async generate(roomId, currentDate) {
      const payload = await timeoutPromise(1000, {
        selectedDate,
        children,
      }); // remove and get real data with two params: roomId, currentDate.

      // const dataForPDF = this.dataAdapter.init(payload).getParseData();

      // let file = null;
      //
      // await pdf.create(commonPage(dataForPDF), config).toBuffer((err, buffer) => {
      //   if (!err) {
      //     file = buffer;
      //   }
      // });

      // return this.reportSaver.save({ file, name: 'NameToFacePDF', type: 'pdf' });

        console.log(`${process.cwd()}/fonts/clarika_regular.otf`);
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.addStyleTag({ url: "https://fonts.googleapis.com/css?family=Roboto&display=swap"});
      await page.setContent(commonPage(data));
      const a = commonPage(data);
      await page.pdf(config);
      await browser.close();
    }
}

module.exports = new PDFManager();
