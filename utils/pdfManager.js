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
            "payload": "{\"files\":[{\"bucket\":\"nurture-dev-files\",\"mimeType\":\"image\\/jpeg\",\"url\":\"https:\\/\\/rrk51bhdb6.execute-api.us-east-1.amazonaws.com\\/dev\\/permission\\/?bucket=nurture-dev-files&key=us-east-1:97c86689-242a-443c-9d49-006657c7a6c6\\/children\\/18323\\/photo\\/474314ED-8095-4F49-8E0B-0F23ADE80C1A.jpeg&sub=19e0f83d-80c6-48dc-80db-90de308cd9a3\",\"mediumSize\":\"https:\\/\\/rrk51bhdb6.execute-api.us-east-1.amazonaws.com\\/dev\\/permission\\/?bucket=$response.image.bucket&key=$response.image.key_512_512&sub=19e0f83d-80c6-48dc-80db-90de308cd9a3\",\"largeSize\":\"https:\\/\\/rrk51bhdb6.execute-api.us-east-1.amazonaws.com\\/dev\\/permission\\/?bucket=$response.image.bucket&key=$response.image.key_1024_1024&sub=19e0f83d-80c6-48dc-80db-90de308cd9a3\",\"key\":\"us-east-1:97c86689-242a-443c-9d49-006657c7a6c6\\/children\\/18323\\/photo\\/474314ED-8095-4F49-8E0B-0F23ADE80C1A.jpeg\",\"smallSize\":\"https:\\/\\/rrk51bhdb6.execute-api.us-east-1.amazonaws.com\\/dev\\/permission\\/?bucket=$response.image.bucket&key=$response.image.key_256_256&sub=19e0f83d-80c6-48dc-80db-90de308cd9a3\"}],\"comment\":\"\",\"content\":\"image\"}",
            "teacherName": "Kami",
            "roomId": "285",
            "createdAt": "2019-11-24T18:07:19.887Z",
            "childId": "18323",
            "teacherId": "19670",
            "id": "00fc2772-ffb9-477c-9c5e-047ba41b9c15",
            "type": "childFiles"
        },
        {
            "payload": "{}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:21:37.066Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "2c7ea89e-e2e3-45fc-93cf-ef545d24eb72",
            "type": "childCheckedOut"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/mood\\/happy.png\",\"categoryName\":\"Happy\",\"comment\":\"Rye was happy today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:24:42.309Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "cb675304-ff0c-43cb-9db3-c1890b9233ec",
            "type": "childCategories"
        },
        {
            "payload": "{\"kidMealId\":\"fd199f03-33ae-49bf-bcd9-9eb04bd5a608\",\"dish\":[{\"name\":\"Malted Custard French Toast\",\"volume\":4}],\"updatedAt\":\"2019-04-22T19:26:05.244Z\",\"foodIntakeName\":\"pmSnack\",\"createdAt\":\"2019-04-22T19:26:05.244Z\"}",
            "teacherName": "Megan",
            "entityId": "fd199f03-33ae-49bf-bcd9-9eb04bd5a608",
            "roomId": "285",
            "createdAt": "2019-11-24T19:26:05.758Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "140f3ca0-fa9d-4521-8cd8-ab8e90059a4e",
            "type": "kidMeals"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/behavior\\/trouble_listening.png\",\"categoryName\":\"Trouble Listening\",\"comment\":\"Rye demonstrated trouble listening \\nReason: Rye had a hard time staying on the circle rug during the book.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:28:01.422Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "94f88fcc-9a28-43f7-bb6c-d1b1d9d33b31",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/activity\\/diapers.png\",\"categoryName\":\"Potty\",\"comment\":\"Rye was wet\\/bm and did not try\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:28:36.835Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "da2d8202-86fa-4aad-8987-7c38c57d0bc8",
            "type": "childCategories"
        },
        {
            "payload": "{\"roomId\":\"4db076ce-3aa7-43b7-8fa5-4f99adb7c85c\",\"roomName\":\"Zoo\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:28:55.844Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "80a6f775-5ddf-4efe-b4f4-99d993480930",
            "type": "childMove"
        },
        {
            "payload": "{\"roomId\":\"285\",\"roomName\":\"Otis\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:30:58.938Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "00448465-4c8f-45b9-9df4-e42a00c3a658",
            "type": "childMove"
        },
        {
            "payload": "{}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:31:24.092Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "18a8c1cd-f735-4a43-bd1e-29ae6516e9e6",
            "type": "childCheckedIn"
        },
        {
            "payload": "{\"roomId\":\"4db076ce-3aa7-43b7-8fa5-4f99adb7c85c\",\"roomName\":\"Zoo\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:31:58.233Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "7be8a943-aaa8-4e01-b85a-0d0fa0330bf9",
            "type": "childMove"
        },
        {
            "payload": "{}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:32:51.564Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "5bfcc4ef-1372-4e5a-a8d4-d2011a0c637b",
            "type": "childCheckedIn"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/mood\\/busy_playful.png\",\"categoryName\":\"Busy\\/Playful\",\"comment\":\"Rye was busy\\/playful today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:33:04.318Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "0be029d2-a5a6-4ec8-8436-98cbe361ddd0",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/activity\\/blocks_cars.png\",\"categoryName\":\"Blocks & Cars\",\"comment\":\"Rye explored blocks & cars today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:33:29.463Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "4686cd7a-26a7-4128-a996-a2c07be20e7b",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/corevalue\\/sharing.png\",\"categoryName\":\"Sharing\",\"comment\":\"Rye demonstrated sharing value today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:33:37.083Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "ee77abe1-815b-49e8-a3c5-342784c6b629",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/corevalue\\/sharing.png\",\"categoryName\":\"Sharing\",\"comment\":\"Rye demonstrated sharing value today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:34:02.383Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "c1fc5ee0-7fef-4c4e-9b1d-3a7dfd5e5784",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/corevalue\\/sharing.png\",\"categoryName\":\"Sharing\",\"comment\":\"Rye demonstrated sharing value today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:34:21.373Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "81a3899a-c8ad-4f0a-afb9-ada637013562",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/corevalue\\/manners.png\",\"categoryName\":\"Manners\",\"comment\":\"Rye demonstrated manners value today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:34:32.515Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "3733f360-188a-43cb-acdc-77cc49e886b7",
            "type": "childCategories"
        },
        {
            "payload": "{\"iconUrl\":\"https:\\/\\/s3.amazonaws.com\\/nurture-dev-categories-icons\\/corevalue\\/manners.png\",\"categoryName\":\"Manners\",\"comment\":\"Rye demonstrated manners value today.\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:34:41.229Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "d1f652ab-19b9-4182-ae21-3a5a174171c4",
            "type": "childCategories"
        },
        {
            "payload": "{\"endTime\":\"2019-04-22T19:43:55.795Z\",\"startTime\":\"2019-04-22T19:40:05.719Z\"}",
            "teacherName": "Megan",
            "roomId": "285",
            "createdAt": "2019-11-24T19:43:56.442Z",
            "childId": "18323",
            "teacherId": "26199",
            "id": "02521359-3dab-4446-81bb-7cfb4a86ea4a",
            "type": "napsUp"
        }
    ],
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
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(commonPage(data));
        const a = commonPage(data);
        await page.pdf(config);
        await browser.close();
    }
}

module.exports = new PDFManager();
