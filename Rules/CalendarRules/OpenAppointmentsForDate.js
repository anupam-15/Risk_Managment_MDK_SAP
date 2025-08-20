export default function OpenAppointmentsForDate(context) {
    let selectedDate = context.getValue();
    context.getPageProxy().setActionBinding({ SelectedDate: selectedDate });
    return context.executeAction("/RiskManagementApp/Actions/Calendar/NavToAppointmentsList.action");
}
