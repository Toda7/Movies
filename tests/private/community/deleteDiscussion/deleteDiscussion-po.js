function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function findDiscussion() {
    // Pronadji napravljenu diskusiju i klikni
    element(by.className('title', 'ATQA')).click(); 
    browser.sleep(1000);
}

function clickAction() {
    // Klik na Action menu
    element(by.className('dropdown_menu')).click(); 
    browser.sleep(1000);
}

function clickDelete() {
    //  Klikni na Delete dugme
    element(by.cssContainingText('li.collection-item', 'Delete')).click();
    browser.sleep(1000);
}

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je uspesno obrisana diskusija
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 5000);
    browser.sleep(2000);
 }  
 module.exports = {
    landOnFIProfessionalsHome,
    findDiscussion,
    clickAction,
    clickDelete,
    checkSuccess,
}