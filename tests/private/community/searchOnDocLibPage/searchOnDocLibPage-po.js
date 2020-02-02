function enterSearchWord() {
    // Unosenje texta u search polje da dobijemo no document poruku
    element(by.css('input[type=text')).sendKeys('klasndlkasndlkasndklanskdlnasdnaskldnklasndlanskldnkla');
}

function checkNoDocMessage(){
    // Provera da li se poruka za no documents ucitala
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'There are no documents that match "klasndlkasndlkasndklanskdlnasdnaskldnklasndlanskldnkla"'), 5000);
}

function checkURLwithSearchWord() {
    // Provera da li smo dobili search URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents?q=klasndlkasndlkasndklanskdlnasdnaskldnklasndlanskldnkla'), 5000);
}

function removeTextFromTheField() {
    // Brisanje texta iz polja, uradio sam ovako jer mi nije radio CLEAR (vrv jer idem preko css-a)
    var EC = protractor.ExpectedConditions;
    element(by.css('input[type=text')).sendKeys('');
}

function enterValidSearchWord() {
    // Unosenje texta u search polje
    element(by.css('input[type=text')).clear().sendKeys('laqasadipapel');
}

function countOneDoc() {
    // Provera da li se na strani nalazi 1 document
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(1);
}

function checkDocName(){
    // Provera da li se ucitao doc name u kartici
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .card.item_card .item_sig .post_title .constrain .title'), 'laqasadipapel'), 5000);
}

function checkUserName(){
    // Provera da li se ucitao user name u kartici
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .card.item_card .item_sig .post_title .constrain .created_by'), 'Memphis 92 FI Foreva | Quality Assurance'), 5000);
}

function checkTopic(){
    // Provera da li su se ucitali topici u kartici
    var xxx = element(by.className('card-content tags'));
    expect(xxx.getText()).toEqual('Topics: Testing, Stress Testing');
}

function checkViewDocumentButton(){
    // Provera da li se ucitao VIEW DOCUMENT button
    var xxx = element(by.className('btn-flat right read_more'));
    expect(xxx.getText()).toEqual('VIEW DOCUMENT');
}

function clickOnDocToSeeDocDetailsPage() {
    // Klik na document iz rezultata
    element(by.className('btn-flat right read_more')).click();
}

function checkDocumentDetailsURL() {
    // Provera URLa nakon klika na doc iz rezultata
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents/view/a271d842-ae40-481b-9327-54c1c56c8f53?q=laqasadipapel'), 5000);
}

 module.exports = {
    enterSearchWord,
    checkNoDocMessage,
    checkURLwithSearchWord,
    removeTextFromTheField,
    enterValidSearchWord,
    countOneDoc,
    checkDocName,
    checkUserName,
    checkTopic,
    checkViewDocumentButton,
    clickOnDocToSeeDocDetailsPage,
    checkDocumentDetailsURL,
}