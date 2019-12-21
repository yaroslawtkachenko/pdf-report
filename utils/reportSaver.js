// const { s3Client } = require('../s3/S3Client'); // import s3 client for uploading file
//
// class ReportSaver {
//   constructor ({ s3Client, reportsBucket }) {
//     this.s3Client = s3Client;
//     this.reportsBucket = reportsBucket;
//     this.contentTypes = {
//       pdf: 'application/pdf'
//     }
//   }
//
//   async save (report) {
//     await this.uploadReportsToS3(report);
//   }
//
//   uploadReportsToS3 (report) {
//     return this.s3Client.upload({
//       bucket: this.reportsBucket,
//       key: `${report.name}.pdf`,
//       body: report.file,
//       contentType: this.contentTypes[report.type]
//     })
//   }
// }
//
// module.exports = {
//   reportSaver: new ReportSaver({ s3Client, reportsBucket: 'REPORTS_BUCKET' }), // get real bucket name from env variables
//   ReportSaver
// };
