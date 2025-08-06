// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function Mitigations_DeleteConfirmation(clientAPI) {
// }


export default function Mitigations_DeleteConfirmation(context) {
    return context.executeAction('/RiskManagementApp/Actions/Mitigations_DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return context.executeAction('/RiskManagementApp/Actions/Mitigations_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}