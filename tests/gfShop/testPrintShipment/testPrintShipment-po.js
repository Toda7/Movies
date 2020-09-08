function landOnMyOrdersPage(){
    //dolazak na My Orders stranu u Truglo shopu
    browser.get('https://shop.outfitterextreme.com/truglo/sales/order/history/'); 
    browser.sleep(2000);
}

function clickOnOrderView(){
    // Klik na poslednji naruceni ordcer 
    element.all(by.className('action view')).get(0).click();
}

function clickOnOrderShippmentsTab(){
    // Klik na Order Shipments tab 
    element.all(by.className('nav item')).get(2).click();
}

function clickOnPrintShipment(){
    // Klik na PRINT SHIPMENT link 
    element.all(by.className('action print')).get(2).click();
}

function clickOnEscButton() {
    // Klik Na ESCAPE da se skloni modal za Print 
    element(by.css('body')).sendKeys(protractor.Key.ESCAPE);
   browser.sleep(1000);
}

function checkTrugloLogo() {
    // Provera da li je dobar Truglo logo na print shipment strani
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://shop.outfitterextreme.com/pub/media//sales/store/logo_html/websites/70/truglo_00.png');
    browser.sleep(1000);
}

function checkOrderStatus() {
    // Provera da li je dobar Order Status
    var xxx = element(by.className('order-status'));
    expect(xxx.getText()).toEqual('COMPLETE');
    browser.sleep(1000);
}

function clickOnPrintAllShipments(){
    // Klik na PRINT SHIPMENT 
    element.all(by.className('action print')).get(1).click();
}

module.exports = {
    landOnMyOrdersPage,
    clickOnOrderView,
    clickOnOrderShippmentsTab,
    clickOnPrintShipment,
    clickOnEscButton,
    checkTrugloLogo,
    checkOrderStatus,
    clickOnPrintAllShipments,
}