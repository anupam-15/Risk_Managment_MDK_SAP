// Rules/Format/WeekNumber.js
export default function WeekNumber(context) {
    let date = new Date(); // current date
    let firstJan = new Date(date.getFullYear(), 0, 1);
    let days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil((days + firstJan.getDay() + 1) / 7);
    return `Week ${weekNumber}`;
}
