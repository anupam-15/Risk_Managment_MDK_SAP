// import appSettings from '@nativescript/core/application-settings';

// export default function GetAppointments(context) {
//     if (appSettings.hasKey('appointments')) {
//         return JSON.parse(appSettings.getString('appointments'));
//     }
//     return [];
// }


export default function GetAppointmentsList(context) {
    let appData = context.getAppClientData();
    let list = [];

    if (appData.appointments && appData.appointments.length > 0) {
        list = appData.appointments.map(item => {
            return {
                "Title": item.Title,
                "Subhead": `${item.Date} | ${item.StartTime} - ${item.EndTime}`
            };
        });
    }

    return list;
}
