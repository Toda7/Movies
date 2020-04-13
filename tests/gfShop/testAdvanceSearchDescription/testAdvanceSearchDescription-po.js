function landOnShopPage() {
    // Dolazak na Shop home page
    browser.get('https://shop.outfitterextreme.com/truglo');
    browser.sleep(2000)
}

function clickOnSearchField() {
    // klik na Search polje 
    element(by.className('input-text')).click();
    browser.sleep(2000);
 } 

 function clickOnAdvanceSearch() {
    // klik na Advance serch u hederu 
    element(by.className('action advanced')).click();
    browser.sleep(2000);
 } 

 function checkAdvanceSearchURL() {
   // Provera da li se ucitao URL Advance Search strane
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/'), 7000);
}

 function enterProductDescription() {
    // Unos opisa proizvoda
    element(by.id('description')).clear().sendKeys('magnification');
    browser.sleep(2000);
 }

 function clickSearchButton() {
    // klik na Search button 
    element(by.className('action search primary')).click();
    browser.sleep(2000);
 } 

 function checkModifyMsg() {
   var EC = protractor.ExpectedConditions;
   // Da li se ucitala Modify message
   browser.wait(EC.textToBePresentInElement($('.message.notice'), 'Modify your search.'), 7000);
   browser.sleep(2000);
}

 function checkSerchedProduct() {
    var EC = protractor.ExpectedConditions;
    // Da li se ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('EMINUS™ 3-9X42 30MM IR ML 1PC ILLUMINATED RETICLE TACTICAL SCOPE');
 }

 function clickModifySearch() {
   // klik na Modify link 
   element(by.partialLinkText('Modify')).click();
   browser.sleep(2000);
}

function enterWrongProductDescription() {
   // Unos pogresnog SKU za Producta
   element(by.id('description')).clear().sendKeys('dsadasdas dweq');
   browser.sleep(2000);
}

function clickSearchButton() {
   // klik na Search button 
   element(by.className('action search primary')).click();
   browser.sleep(2000);
} 

function checkErrorMsg() {
   var EC = protractor.ExpectedConditions;
   // Da lis e ucitao Error poruka
   browser.wait(EC.textToBePresentInElement($('.message.error'), 'find any items matching these search criteria.'), 7000);
   browser.sleep(2000);
}

 module.exports = {
    landOnShopPage,
    clickOnSearchField,
    clickOnAdvanceSearch,
    clickSearchButton,
    checkSerchedProduct,
    checkAdvanceSearchURL,
    checkModifyMsg,
    clickModifySearch,
    checkErrorMsg,
    enterWrongProductDescription,
    enterProductDescription,
 }