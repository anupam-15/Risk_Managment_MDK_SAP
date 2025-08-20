export default function ChangeCalendarView(context) {
    const btnName = context.getControl().getName();
    const pageProxy = context.getPageProxy();

    if (btnName === "BtnDay") {
        pageProxy.getClientData().CalendarView = "Day";
        pageProxy.getClientData().NumberOfDays = 1;
    } else if (btnName === "BtnWeek") {
        pageProxy.getClientData().CalendarView = "Day";
        pageProxy.getClientData().NumberOfDays = 7;
    } else if (btnName === "BtnMonth") {
        pageProxy.getClientData().CalendarView = "Month";
        pageProxy.getClientData().NumberOfDays = 0;
    }

    // Get the Calendar section and redraw it
    const calendarSection = pageProxy.getControl('SectionedTable0').getSection('SectionCalendar0');
    if (calendarSection) {
        return calendarSection.redraw();
    }

    return Promise.resolve();
}
