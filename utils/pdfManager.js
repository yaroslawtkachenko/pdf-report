const puppeteer = require('puppeteer');

const { config } = require('./constants');
const { timeoutPromise } = require('./helpers');
const commonPage = require('../templates/commonPage');
const DataAdapter = require('./dataAdapters');
const ReportSaver = require('./reportSaver');
const {
  selectedDate,
  currentRoom,
  children,
  teachers,
  totals,
  rooms,
} = require('./mockData'); // Mock for testing create flow. Remove after fetching real data

class PDFManager {
    constructor() {
        this.dataAdapter = DataAdapter;
        this.reportSaver = ReportSaver;
    }

    async generate(roomId, currentDate) {
      const payload = await timeoutPromise(1000, {
        selectedDate,
        currentRoom,
        children,
        teachers,
        totals,
        rooms,
      }); // remove and get real data with two params: roomId, currentDate.

      const dataForPDF = this.dataAdapter.init(payload).getParseData();

      // let file = null;
      //
      // await pdf.create(commonPage(dataForPDF), config).toBuffer((err, buffer) => {
      //   if (!err) {
      //     file = buffer;
      //   }
      // });

      // return this.reportSaver.save({ file, name: 'NameToFacePDF', type: 'pdf' });

      const headerData = dataForPDF.headerData;
      const totalData = dataForPDF.totalData;
      const legendData = dataForPDF.legendData;
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(commonPage(dataForPDF));
      await page.pdf(config(headerData, totalData, legendData));
      await browser.close();
    }
}

module.exports = new PDFManager();
