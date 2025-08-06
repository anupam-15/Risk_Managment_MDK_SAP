// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function ValidateMitigationsFields(clientAPI) {
// }


export default function ValidateMitigationsFields(context) {
    const description = context.evaluateTargetPath('#Control:MitigationsCreate_Description/#Value');
    const owner = context.evaluateTargetPath('#Control:MitigationsCreate_Owner/#Value');
    const timeline = context.evaluateTargetPath('#Control:MitigationsCreate_Timeline/#Value');

    if (!description || description.trim() === '') {
        return showMessage(context, 'Description is required.');
    }

    if (!owner || owner.trim() === '') {
        return showMessage(context, 'Owner is required.');
    }

    if (!timeline || timeline.trim() === '') {
        return showMessage(context, 'Timeline is required.');
    }

    return context.executeAction('/RiskManagementApp/Actions/Mitigations_Create.action');
}

function showMessage(context, messageText) {
    return context.executeAction({
        "Name": "/RiskManagementApp/Actions/ValidationFailureMessage.action",
        "Properties": {
            "Message": messageText
        }
    });
}