export default function Calendar_OnLoaded(context) {
    const pageProxy = context.getPageProxy();
    pageProxy.getClientData().CalendarView = "Month";
    pageProxy.getClientData().NumberOfDays = 0; 
    pageProxy.getClientData().ShowCalendar = true;
    pageProxy.getClientData().ShowTeamList = true; // default for Team
}
