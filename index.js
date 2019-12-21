const PDFManager = require('./utils/pdfManager');

const roomId = '123';
const selectedDate = '09/12/2019';

PDFManager.generate(roomId, selectedDate);
