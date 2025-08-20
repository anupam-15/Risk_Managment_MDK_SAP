// export default function StoreScanResult(context) {
//     const result = context.getActionResult('OpenBarcodeScanner');
//     console.log("Scanned result: ", result);
//     if (result && result.data) {
//         context.getAppVariables().set('QRResult', result.data);
//     } else {
//         context.getAppVariables().set('QRResult', 'No QR code scanned.');
//     }
// }


export default function StoreScanResult(context) {
    const result = context.getActionResult('OpenBarcodeScanner');
    let scannedValue = '';

    if (result && result.data) {
        scannedValue = result.data;
    }

    // Save to app variable (optional if you still need it elsewhere)
    context.setAppVariable('QRResult', scannedValue);

    // Get reference to the table section
    let pageProxy = context.getPageProxy();
    let table = pageProxy.getControl('SectionObjectTable0');

    if (table) {
        // Apply the scanned value as a search filter
        table.search(scannedValue);
    }

    return Promise.resolve();
}
