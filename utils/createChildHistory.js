const moment = require('moment');

const { parseJSON } = require('../utils/parseJSON');
const { childIcons, childMoodIcons } = require('../images');
const foodLine = require('../templates/foodLine');

function createChildHistory({
   childName,
   teacherName,
   type,
   payload,
   time,
}) {
    return Object.assign(
        {
            childName,
            teacherName,
            type,
            payload,
            time,
            childHistoryTypeEnum: {
                kidMeals: 'Food',
                infantMeals: 'Food',
                customMeals: 'Food',
                napsUp: 'Nap',
                napsDown: 'Nap',
                childCategories: 'Mood',
                childFiles: 'File',
                childCheckedIn: 'Hooray!',
                childCheckedOut: 'Goodbye!',
                childMove: 'Move',
                childCurriculum: 'Learning',
                curriculumReminder: 'Reminder',
            },
            childHistoryContentEnum: {
                image: 'Photo',
                video: 'Video',
            },
            childHistoryIconsEnum: {
                kidMeals: 'meals',
                infantMeals: 'meals',
                customMeals: 'meals',
                napsUp: 'nap',
                napsDown: 'nap',
                childCategories: 'Category',
                childFiles: 'photo',
                childCheckedIn: 'hooray',
                childCheckedOut: 'goodbye',
                childMove: 'move',
                childCurriculum: 'book',
                curriculumReminder: 'Reminder',
            },
        },
        createChildHistory.protoGenerate,
    );
}

createChildHistory.protoGenerate = {
    getIconByType: function getIconByType() {
        let icon = '';
        switch (this.type) {
            case 'childCategories':
                icon = childMoodIcons[this.payload.categoryName.toLocaleLowerCase()];
                break;
            case 'childFiles':
                icon = childIcons[this.payload.content];
                break;
            default:
                icon = childIcons[this.childHistoryIconsEnum[this.type]];
                break;
        }
        return `<img
            style="width: 40px; height: 40px; filter: invert(1); object-fit: cover"
            src=${icon}
            alt="child file"
        />`
    },
    getCurrentType: function getCurrentType() {
        if (this.type === 'childFiles') {
            return this.childHistoryContentEnum[this.payload.content] || '-';
        }
        return this.childHistoryTypeEnum[this.type] || '-';
    },
    getCurrentTime: function getCurrentTime() {
        return `
            <div>${moment(this.time).format('MM/DD/YY') || '-'}</div>
            <div>${moment(this.time).format('HH:mm a') || '-'}</div>
        `;
    },
    getTeacherName: function getTeacherName() {
        return `<div>by ${this.teacherName}</div>` || '-';
    },
    generatePayloadContent: function generatePayloadContent() {
        if (!this.payload) return '-';

        const childrenName = this.childName || '';
        const comment = this.payload.comment || '';

        switch (this.type) {
            case 'childCheckedIn':
              return `
                <div>${childrenName} arrived at school. ${comment}</div>
                ${this.getTeacherName()}
              `;

            case 'childCheckedOut':
              return `
                <div>${childrenName} left school. ${comment}</div>
                ${this.getTeacherName()}
              `;

            case 'childMove': {
              const roomName = this.payload.roomName || '-';
              return `
                <div>${childrenName} moved to ${roomName}. ${comment}</div>
                ${this.getTeacherName()}
              `;
            }

            case 'napsDown':
              return this.payload.endTime
                  ? `
                    <div>
                        ${childrenName} 
                        began napping at 
                        ${moment(this.payload.startTime).format('HH:mm a')}
                        and woke up from a nap at
                        ${moment(this.payload.endTime).format('HH:mm a')}
                        ${comment}
                    </div>
                    ${this.getTeacherName()}
                  `
                  : `
                    <div>
                        ${childrenName} 
                        began napping at 
                        ${moment(this.payload.startTime).format('HH:mm a')}. 
                        ${comment}
                    </div>
                    ${this.getTeacherName()}
                  `;

            case 'napsUp':
                return this.payload.startTime
                    ? `
                        <div>
                            ${childrenName} 
                            began napping at 
                            ${moment(this.payload.startTime).format('HH:mm a')} and 
                            woke up from a nap at 
                            ${moment(this.payload.endTime).format('HH:mm a')}
                            ${this.payload.comment || ''}
                        </div>
                        ${this.getTeacherName()}
                    `
                    : `
                        <div>
                            ${childrenName} 
                            woke up from a nap at 
                            ${moment(this.payload.startTime).format('HH:mm a')}. ${comment}
                        </div>
                        ${this.getTeacherName()}
                    `;

            case 'childCategories':
                return `
                    <div>${this.payload.categoryName || ''}. ${comment}</div>
                    ${this.getTeacherName()}
                `;

            case 'childCurriculum':
                return this.payload
                    .map(activity => (
                        `<div>
                           ${activity.name || ''} : ${activity.items.length ? activity.items.map(item => item.value) : '-'}. ${comment}}
                        </div>`
                        ));

            case 'childFiles': {
                const files = this.payload.files.map(({ url }) => ({ url }));
                return files
                    .map(file => (`
                        <div>
                          <div>${comment}</div>
                          ${this.getTeacherName()}
                          ${this.payload.content === 'image'
                        ? `<img style="width: 264px; height: 264px; object-fit: cover" src=${file.url} alt="child file"/>`
                        : `<div style="width: 264px; height: 170px; border: 1px solid rgba(74, 74,74, 0.75); border-radius: 5px; display: flex; justify-content: center; align-items: center;">
                             <img style="width: 74px; height: 74px; object-fit: cover" src=${childIcons.play} alt="child file"/>
                           </div>
                        `}
                        </div>
                    `)).join('');
            }

            case 'curriculumReminder':
                return `
                    <div>${this.payload.reminder}. ${comment}</div>
                    ${this.getTeacherName()}
                `;

            case 'customMeals':
            case 'kidMeals': {
                const dishes = this.payload.dish.map(({ name }) => name).join(', ');
                const foodType = this.payload.foodIntakeName || '-';

                return `
                  <div>
                      ${childrenName} 
                      had ${dishes} 
                      for ${foodType}. 
                      ${comment}
                  </div>
                  ${this.getTeacherName()}
                  <div>
                      ${this.payload.dish.map(d => foodLine(d))}
                  </div>
                `;
            }
            default:
              return '-';
        }
    }
};

module.exports = createChildHistory;
