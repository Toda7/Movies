var create_hosted_webinar = require('./create_hosted_webinar-po.js');

describe('Create hosted webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

// it("should open the first tab", function() {

//     browser.getAllWindowHandles().then(function (handles) {
    
//     browser.switchTo().window(handles[0]);
    
//     });
    
//     });

it('Dolazak na dashboard stranu da bi otvorili novi tab', function(){
    create_hosted_webinar.landDashboardtoopennewtab();
});

it('Klik na community to get new tab', function(){
    create_hosted_webinar.clickOnCommunityink();
});

it('Dolazak na admin stranu', function(){
    create_hosted_webinar.landOnEducationAdminPage();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[0]);
    });
});

it('Klik on webinars link', function(){
    create_hosted_webinar.clickOnWebinarsLink();
});

it('Klik on create hosted webinar button', function(){
    create_hosted_webinar.clickOnCreateHostedWebinarButton();
});

it('Provera da li se ucitao title on page', function(){
    create_hosted_webinar.checkTitleOnPage();
});

it('Unosenje texta u title field', function(){
    create_hosted_webinar.enterTextInTitleField();
});

it('Unosenje texta u synopsis field', function(){
    create_hosted_webinar.enterTextInSynopsisField();
});

it('Unosenje texta u description field', function(){
    create_hosted_webinar.enterTextInDescriptionField();
});

it('Unosenje linka u here field', function(){
    create_hosted_webinar.enterTextInHereField();
});

it('Unosenje linka u tile field', function(){
    create_hosted_webinar.enterTextInTileField();
});

it('Unosenje text u price field', function(){
    create_hosted_webinar.enterTextInPriceField();
});

it('Setovaje start date', function(){
    create_hosted_webinar.enterTextInStartDateField();
});

it('Setovaje PM in start date', function(){
    create_hosted_webinar.enterTextInStartDateField2();
});

it('Setovaje end date', function(){
    create_hosted_webinar.enterTextInEndDateField();
});

it('Setovaje PM in end date', function(){
    create_hosted_webinar.enterTextInEndDateField2();
});

it('Klik on + ADD SESSION button', function(){
    create_hosted_webinar.clickToAddSession();
});

it('Unosenje text u Purchase Details field', function(){
    create_hosted_webinar.enterTextInPurchaseDetailsField();
});

it('Klik on Save Webinar button', function(){
    create_hosted_webinar.clickOnSaveWebinarButton();
    browser.sleep(3000);
});

it('Upload file', function(){
    create_hosted_webinar.addDoc();
});

it('Select paid option', function(){
    create_hosted_webinar.selectPaidForVisibility();
});

it('Klik on Upload & Attach button', function(){
    create_hosted_webinar.clickOnUploadAttachButton();
});

it('Unosenje texta u presenter field', function(){
    create_hosted_webinar.enterTextInPresentersField();
});

it('Klik on Find & Attach button', function(){
    create_hosted_webinar.clickOnFindttachButton();
});

it('Select topic tag', function(){
    create_hosted_webinar.selectTopicTags();
});

it('Klik to Select Topic', function(){
    create_hosted_webinar.clickOnTopicToSelect();
});

it('Klik on Save Topics button', function(){
    create_hosted_webinar.clickOnSaveTopicsButton();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    });
});



afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});