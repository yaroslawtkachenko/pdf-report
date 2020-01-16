const selectedDate = '09/12/2019';

const currentRoom = {
    id: 1,
    name: 'Adabelle',
};

const children = [
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Nency",
        type: "kidMeals",
        payload: {
            kidMealId: "24fbf7bf-feb9-45d8-b0f1-653df9a0d0de",
            dish: [
                {
                    name: "snack",
                    volume: 2
                }
            ],
            updatedAt: "2019-08-14T12:19:36.022Z",
            foodIntakeName: "AM Snack",
            createdAt: "2019-08-14T12:19:36.022Z"
        },
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Nency",
        type: "childCheckedIn",
        payload: {},
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Nency",
        type: "childCheckedOut",
        payload: {},
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "customMeals",
        payload: {
            kidMealId: "59446064-0d97-46db-ab95-9ec1e562d076",
            dish: [
                {
                    "name": "gbgb",
                    "volume":1
                }
            ],
            updatedAt: "2019-10-31T12:33:07.142Z",
            foodIntakeName: "lunch",
            createdAt: "2019-10-31T10:07:29.440Z"
        },
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "childMove",
        payload: {
            roomId: "280",
            from: {
                roomId:"285",
                roomName: "Otis"
            },
            roomName: "Faris"
        },
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Nency",
        type: "childCheckedIn",
        payload: {},
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Nency",
        type: "childCheckedOut",
        payload: {},
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "customMeals",
        payload: {
            kidMealId: "59446064-0d97-46db-ab95-9ec1e562d076",
            dish: [
                {
                    "name": "gbgb",
                    "volume":1
                }
            ],
            updatedAt: "2019-10-31T12:33:07.142Z",
            foodIntakeName: "lunch",
            createdAt: "2019-10-31T10:07:29.440Z"
        },
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "childMove",
        payload: {
            roomId: "280",
            from: {
                roomId:"285",
                roomName: "Otis"
            },
            roomName: "Faris"
        },
    },
    {
        date: "2019-12-21",
        name: "Han",
        lastName: "Solo",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "childFiles",
        payload: {
            files: [
                {
                    bucket: "nur-pay-services-stage-files",
                    mimeType: "image/jpeg",
                    url: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=nur-pay-services-stage-files&key=us-east-1:7e1466d7-e333-4a7b-9de4-36c31d44f215/children/18323/B18B7B55-5466-4E15-B6C6-2FD2B4C1F0F2.jpeg&sub=b9d5a334-0210-4f81-9415-8ed0537da522",
                    mediumSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=nur-pay-services-stage-files&key=us-east-1:7e1466d7-e333-4a7b-9de4-36c31d44f215/children/18323/B18B7B55-5466-4E15-B6C6-2FD2B4C1F0F2.jpeg_512_512&sub=b9d5a334-0210-4f81-9415-8ed0537da522",
                    largeSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=nur-pay-services-stage-files&key=us-east-1:7e1466d7-e333-4a7b-9de4-36c31d44f215/children/18323/B18B7B55-5466-4E15-B6C6-2FD2B4C1F0F2.jpeg_1024_1024&sub=b9d5a334-0210-4f81-9415-8ed0537da522",
                    key: "us-east-1:7e1466d7-e333-4a7b-9de4-36c31d44f215/children/18323/B18B7B55-5466-4E15-B6C6-2FD2B4C1F0F2.jpeg",
                    smallSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=nur-pay-services-stage-files&key=us-east-1:7e1466d7-e333-4a7b-9de4-36c31d44f215/children/18323/B18B7B55-5466-4E15-B6C6-2FD2B4C1F0F2.jpeg_256_256&sub=b9d5a334-0210-4f81-9415-8ed0537da522"
                }
            ],
            comment: "Rye's new profile photo",
            content: "image"
        }
    },
    {
        date: "2019-12-21",
        name: "Han",
        lastName: "Solo",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "childFiles",
        payload: {
            files: [
                {
                    bucket: "nur-pay-services-stage-files",
                    mimeType: "image/jpeg",
                    url: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=nur-pay-services-stage-files&key=us-east-1:ab850dcc-81ae-4939-997a-2c49b04b0f37/children/18323/video/preview/0581C9EB-848A-43C3-8C22-2B32256974C7.jpeg&sub=3d50d97f-67c1-49d1-82f9-2b4488644571",
                    mediumSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=$response.image.bucket&key=$response.image.key_512_512&sub=3d50d97f-67c1-49d1-82f9-2b4488644571",
                    largeSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=$response.image.bucket&key=$response.image.key_1024_1024&sub=3d50d97f-67c1-49d1-82f9-2b4488644571",
                    key: "us-east-1:ab850dcc-81ae-4939-997a-2c49b04b0f37/children/18323/video/preview/0581C9EB-848A-43C3-8C22-2B32256974C7.jpeg",
                    smallSize: "https://bcm90xjt1m.execute-api.us-east-1.amazonaws.com/stage/permission/?bucket=$response.image.bucket&key=$response.image.key_256_256&sub=3d50d97f-67c1-49d1-82f9-2b4488644571"
                }
            ],
            "comment": "",
            "content": "video"
        },
    },
    {
        date: "2019-12-21",
        name: "John",
        lastName: "Smith",
        createdAt: "2019-12-21T10:10:00.000Z",
        teacherName: "Sarah",
        type: "childCategories",
        payload: {
            iconUrl: "https://s3.amazonaws.com/nurture-prod-categories-icons/mood/happy.png",
            categoryName: "Happy",
            comment: "Calvin1234 was happy today."
        },
    },

];

module.exports = {
    selectedDate,
    currentRoom,
    children,
};
