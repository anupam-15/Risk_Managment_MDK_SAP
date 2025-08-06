// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function GetMitigationCountLabel(clientAPI) {
// }


export default function GetMitigationCountLabel(context) {
    return context.read('/RiskManagementApp/Services/myapp_mdk_demo.service', 'Mitigations', [], '')
        .then((results) => {
            return `Mitigations (${results.length})`;
        }).catch(() => {
            return 'Mitigations (0)';
        });
}
