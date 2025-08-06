// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function GetRiskCount(clientAPI) {
// }


export default function GetRiskCount(context){
    return context.read('/RiskManagementApp/Services/myapp_mdk_demo.service', 'Risks', [], '')
    .then((results)=> {
        context.getAppClientData().RiskCount = results.length;
        return `Risks (${results.length})`;
    }).catch(()=>{
        context.getAppClientData().RiskCount = 0;
        return `Risks (0)`;
    });
}