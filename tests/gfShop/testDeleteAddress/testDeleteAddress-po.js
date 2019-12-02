function checkBoxContent() {
   // Provera da li je stara addresa otisla na mesto Building addrese addrese 
   var xxx = element.all(by.className('box-content')).get(0);
   expect(xxx.getText()).toEqual('Bradly Seales\n8199 Alabama Hwy 22\nMaplesville, Alabama, 36750\nUnited States\nT: 334-467-0770');
}

function checkBoxContent2() {
   // Provera da li je stara addresa otisla na mesto Shipping addrese 
   var xxx = element.all(by.className('box-content')).get(1);
   expect(xxx.getText()).toEqual('Bradly Seales\n8199 Alabama Hwy 22\nMaplesville, Alabama, 36750\nUnited States\nT: 334-467-0770');
}

function clickOnDeletetLink() {
   // Klik on delete link for address
   element.all(by.className('action delete')).get(2).click();
   browser.sleep(3000);
}

function clickToConfirmToDelete() {
   // Klik on OK link to confirm delete 
   element(by.className('action-primary action-accept action primary')).click();
   browser.sleep(3000);
}

function checkSucessDeleteMessage() {
   // Da li se pojavila success poruka za delete
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You deleted the address.'), 5000);
}

 module.exports = {
   checkBoxContent,
   checkBoxContent2,
   clickOnDeletetLink,
   clickToConfirmToDelete,
   checkSucessDeleteMessage,
}