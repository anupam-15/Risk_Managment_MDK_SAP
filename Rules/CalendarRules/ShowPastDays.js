export default function ShowPastDays(context) {
    const daysBack = 9; // 9 means total 10 days including today
    let today = new Date();
    let startDate = new Date(today);
    startDate.setDate(today.getDate() - daysBack);

    let calendar = context.getPageProxy()
                          .getControl('SectionedTable0')
                          .getSection('SectionCalendar0');

    calendar.setValue(startDate);
}
