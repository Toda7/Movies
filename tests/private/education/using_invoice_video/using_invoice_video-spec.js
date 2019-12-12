var buying_video = require('../buying_video/buying_video-po.js');
var buying_hosted_webinar = require('../buying_hosted_webinar/buying_hosted_webinar-po.js');
var using_invoice_outsourced = require('../using_invoice_outsourced/using_invoice_outsourced-po.js');
var using_invoice_video = require('./using_invoice_video-po.js');
var using_invoice_hosted = require('../using_invoice_hosted/using_invoice_hosted-po.js');


describe('Using invoice in buying video ', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buying_video.landOnVideoPage();
});

it('Unosenje texta u search polje', function(){
    buying_video.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first video on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Click on invoice link', function(){
    using_invoice_outsourced.clickOnInvoiceLink();
});

it('Klik on Agree & Pay button', function(){
    using_invoice_video.clickOnAgreePayButton();
});

it('Dolazak na webinras stranu', function(){
    buying_video.landOnVideoPage();
});

it('Unosenje texta u search polje', function(){
    buying_video.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first video on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    buying_video.checkPurchaseMessage();
});

it('Hover To Open User Drop', function(){
    using_invoice_hosted.HoverToOpenUserDrop();
});

it('Klik on SingOut', function(){
    using_invoice_hosted.clickOnSignOutLink();
});

it('Klik on SinIn', function(){
    using_invoice_hosted.clickOnSignIn();
});

it('Enter email', function(){
    using_invoice_hosted.enterEmail();
});

it('Enter password', function(){
    using_invoice_hosted.enterPass();
});

it('Klik na Submit', function(){
    using_invoice_hosted.submit();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[0]);
    });
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});