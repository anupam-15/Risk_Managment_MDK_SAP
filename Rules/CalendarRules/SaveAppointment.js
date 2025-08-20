// export default function SaveAppointment(context) {
//     let pageProxy = context.getPageProxy();

//     let date = pageProxy.getControl('SectionedTable0').getControl('DatePicker').getValue();
//     let start = pageProxy.getControl('SectionedTable0').getControl('StartTime').getValue();
//     let end = pageProxy.getControl('SectionedTable0').getControl('EndTime').getValue();
//     let title = pageProxy.getControl('SectionedTable0').getControl('Title').getValue();

//     // Access app-level data
//     let appData = context.getAppClientData();
//     if (!appData.appointments) {
//         appData.appointments = [];
//     }

//     appData.appointments.push({
//         Title: title,
//         Date: date,
//         StartTime: start,
//         EndTime: end
//     });

//     // Navigate to the list page
//     return context.executeAction('/RiskManagementApp/Actions/Calendar/NavToAppointmentsList.action');
// }


export default function SaveAppointment(context) {
    let pageProxy = context.getPageProxy();

    let date = pageProxy.getControl('SectionedTable0').getControl('DatePicker').getValue();
    let start = pageProxy.getControl('SectionedTable0').getControl('StartTime').getValue();
    let end = pageProxy.getControl('SectionedTable0').getControl('EndTime').getValue();
    let title = pageProxy.getControl('SectionedTable0').getControl('Title').getValue();

    let appData = context.getAppClientData();
    if (!appData.appointments) {
        appData.appointments = [];
    }

    appData.appointments.push({
        Title: title,
        Date: date,
        StartTime: start,
        EndTime: end
    });

    // Pass data to the list page
    return context.executeAction({
        "Name": "/RiskManagementApp/Actions/Calendar/NavToAppointmentsList.action",
        "Properties": {
            "Data": appData.appointments
        }
    });
}



// export default function SaveAppointment(context) {
//     let pageProxy = context.getPageProxy();

//     let date = pageProxy.getControl('SectionedTable0').getControl('DatePicker').getValue();
//     let start = pageProxy.getControl('SectionedTable0').getControl('StartTime').getValue();
//     let end = pageProxy.getControl('SectionedTable0').getControl('EndTime').getValue();
//     let title = pageProxy.getControl('SectionedTable0').getControl('Title').getValue();

//     let appointment = {
//         title: title,
//         date: date,
//         description: `From ${start} to ${end}`
//     };

//     let appData = context.getAppClientData();
//     if (!appData.appointments) {
//         appData.appointments = [];
//     }
//     appData.appointments.push(appointment);

//     return context.executeAction("/RiskManagementApp/Actions/Calendar/NavToAppointmentsList.action");
// }
