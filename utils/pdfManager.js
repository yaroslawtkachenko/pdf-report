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

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(commonPage(children));
      await page.pdf(config);
      const a = commonPage(children);
      await browser.close();
    }
}

module.exports = new PDFManager();
