import moment from 'moment';

import parseJSON from '../utils/parseJSON';

export default function createChildHistory({
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
            payload: parseJSON(payload),
            time,
            childHistoryTypeEnum: {
                kidMeals: 'Meals',
                infantMeals: 'Meals',
                customMeals: 'Meals',
                napsUp: 'Nap',
                napsDown: 'Nap',
                childCategories: 'Category',
                childFiles: 'File',
                childCheckedIn: 'Hello!',
                childCheckedOut: 'Goodbye!',
                childMove: 'Move',
                childCurriculum: 'Learning',
                curriculumReminder: 'Reminder',
            },
        },
        createChildHistory.protoGenerate,
    );
}

createChildHistory.protoGenerate = {
    getCurrentType: function getCurrentType() {
        return this.childHistoryTypeEnum[this.type] || '-';
    },
    getCurrentTime: function getCurrentTime() {
        return moment(this.time).format('HH:mm a') || '-';
    },
    getTeacherName: function getTeacherName() {
        return this.teacherName || '-';
    },
    generatePayloadContent: function generatePayloadContent() {
        if (!this.payload) return '-';

        const childrenName = this.childName || '';
        const comment = this.payload.comment || '';

        switch (this.type) {
            case 'childCheckedIn':
              return `${childrenName} arrived at school. ${comment}`;

            case 'childCheckedOut':
              return `${childrenName} left school. ${comment}`;

            case 'childMove': {
              const roomName = this.payload.roomName || '-';
              return `${childrenName} moved to ${roomName}. ${comment}`;
            }

            case 'napsDown':
              return this.payload.endTime
                  ? `
                    ${childrenName} 
                    began napping at 
                    ${moment(this.payload.startTime).format('HH:mm a')}
                    and woke up from a nap at
                    ${moment(this.payload.endTime).format('HH:mm a')}
                    ${comment}
                  `
                  : `
                    ${childrenName} 
                    began napping at 
                    ${moment(this.payload.startTime).format('HH:mm a')}. 
                    ${comment}
                  `;

            case 'napsUp':
                return this.payload.startTime
                    ? `
                        ${childrenName} 
                        began napping at 
                        ${moment(this.payload.startTime).format('HH:mm a')} and 
                        woke up from a nap at 
                        ${moment(this.payload.endTime).format('HH:mm a')}
                        ${this.payload.comment || ''}
                    `
                    : `
                        ${childrenName} 
                        woke up from a nap at 
                        ${moment(this.payload.startTime).format('HH:mm a')}. ${comment}
                    `;

            case 'childCategories':
                return `${this.payload.categoryName || ''}. ${comment}`;

            case 'childCurriculum':
                return this.payload
                    .map(activity => (
                        `<div>
                           ${activity.name || ''} : ${activity.items.length ? activity.items.map(item => item.value) : '-'}. ${comment}}
                        </div>`
                        ));

            case 'childFiles': {
                if (this.payload.content === 'image') {
                    const files = this.payload.files.map(({ url }) => ({ url }));
                    return files
                        .map(file => (`
                            <div>
                              <div>${comment}</div>
                              <img style="width: 90%; height: auto; objectFit: cove" src=${file.url} alt="child file"/>
                            </div>
                        `));
                }

                const file = this.payload.files.filter(({ mimeType }) => mimeType === 'video/mp4')[0];

                return `<div>Video</div>`;
            }

            case 'curriculumReminder':
                return `${this.payload.reminder}. ${comment}`;

            case 'customMeals':
            case 'kidMeals': {
                const dishes = this.payload.dish.map(({ name }) => name).join(', ');
                const foodType = this.payload.foodIntakeName || '-';

                return `
                  ${childrenName} 
                  had ${dishes} 
                  for ${foodType}. 
                  ${comment}
                `;
            }
            default:
              return '-';
        }
    }
};
