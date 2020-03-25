function clickOnLink() {
    //  Click on "Click here to go to legacy app." link
    element(by.className('card-content flow-text center-align')).click();
    browser.sleep(2000);
 }
 function checkRaLegacyAppURL() {
   // Provera da li se ucitao RA Legacy App URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlIs('https://qa.cbancnetwork.com/risk_assessment/home'), 7000);
   browser.sleep(2000);
}

 module.exports = {
    clickOnLink,
    checkRaLegacyAppURL,
 }