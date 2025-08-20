// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function QueryOptions(clientAPI) {
// }

import DateUtils from "../Rules/Library/DateUtils";


export default function QueryOptions(context) {
    return "$filter=date(CreatedAt) eq " + DateUtils.getCurrentDate();
}
