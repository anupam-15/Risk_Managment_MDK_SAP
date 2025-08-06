// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function ValidateRiskFields(clientAPI) {
// }


export default function ValidateRiskFields(context) {
    const title = context.evaluateTargetPath('#Control:RiskCreateTitle/#Value');
    const descr = context.evaluateTargetPath('#Control:RiskCreateDescription/#Value');
    const prio = context.evaluateTargetPath('#Control:RiskCreatePriority/#Value');
    const impact = context.evaluateTargetPath('#Control:RiskCreateImpact/#Value');
    const criticality = context.evaluateTargetPath('#Control:RiskCreateCriticality/#Value');

    if (!title || title.trim() === '') {
        return showMessage(context, 'Title is required.');
    }

    if (!descr || descr.trim() === '') {
        return showMessage(context, 'Description is required.');
    }

    if (!prio || prio.trim() === '') {
        return showMessage(context, 'Priority is required.');
    }

    if (!impact || impact.trim() === '') {
        return showMessage(context, 'Impact is required.');
    }

    if (!criticality || criticality.trim() === '') {
        return showMessage(context, 'Criticality is required.');
    }

    return context.executeAction('/RiskManagementApp/Actions/Risk_CreateEntity.action');
}

function showMessage(context, messageText) {
    return context.executeAction({
        "Name": "/RiskManagementApp/Actions/ValidationFailureMessage.action",
        "Properties": {
            "Message": messageText
        }
    });
}

//---------------------------------------------------------------------------------------------------------
// function showMessage(context, msg) {
//     return context.executeAction({
//         "_Type": "Action.Type.Message",
//         "Message": msg,
//         "Title": "Validation Error",
//         "OKCaption": "OK"
//     });
// }
