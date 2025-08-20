export default function ChangeViewType(context) {
    const selected = context.getValue()[0].ReturnValue;
    const pageProxy = context.getPageProxy();

    if (selected === "Team") {
        pageProxy.getClientData().ShowTeamList = true;
        pageProxy.getClientData().ShowCalendar = true;
    } else {
        pageProxy.getClientData().ShowTeamList = false;
        pageProxy.getClientData().ShowCalendar = true;
    }

    return Promise.resolve();

}
