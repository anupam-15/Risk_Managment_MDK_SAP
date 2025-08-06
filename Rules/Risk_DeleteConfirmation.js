// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function Risk_DeleteConfirmation(clientAPI) {
// }


export default function Risk_DeleteConfirmation(context) {
    return context.executeAction('/RiskManagementApp/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return context.executeAction('/RiskManagementApp/Actions/Risks_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}