function clickOnVendor() {
    // Klik na Vendor link iz headera
    element(by.className('menu_item link_viewfinder')).click();
 }
 function checkVendorUrl() {
    //  Provera da li se ucitao view_finder url
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/view-finder'), 7000);
    browser.sleep(2000);
}
function checkCBANCbox(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao CBANC Sales & Marketing Solutions box
    browser.wait(EC.textToBePresentInElement($('.masthead-content'), 'CBANC Sales & Marketing Solutions'), 7000);
}
function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Get Started Today button
    browser.wait(EC.textToBePresentInElement($('.top_cta'), 'GET STARTED TODAY'), 7000);
    browser.sleep(2000);
}
function checkFooter(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao footer
    browser.wait(EC.textToBePresentInElement($('.copy'), 'Copyright © 2008 - 2020 CBANC Network. All rights reserved.'), 7000);
    browser.sleep(2000);
}    
function checkIntercom(){
    // Provera da li se ucitao intercom
    var interc = element(by.id('intercom-modal-container'));
    expect(interc.isDisplayed()).toBe(false);
}

module.exports = {
    clickOnVendor,
    checkVendorUrl,
    checkCBANCbox,
    checkButton,
    checkIntercom,
    checkFooter,
}