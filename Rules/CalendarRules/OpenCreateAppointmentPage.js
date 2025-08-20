
export default function OpenCreateAppointmentPage(context) {
    // If you want to pre-fill with today's date:
    let selectedDate = new Date();
    context.getPageProxy().setActionBinding({ SelectedDate: selectedDate });
    
    return context.executeAction("/RiskManagementApp/Actions/Calendar/NavToCreateAppointment.action");
}
