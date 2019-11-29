var testPlaceFFLOrder = require('./testPlaceFFLOrder-po.js');

describe('Narucivanje FFL ordera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak u weatherby shop na product details page', function(){
        testPlaceFFLOrder.landOnWeatherbyPage();
    });

    it('Klik to open drop options', function(){
        testPlaceFFLOrder.clickToOpenDrop();
    });

    it('Select option', function(){
        testPlaceFFLOrder.selectOptionFromDrop();
    });

    it('Klik na add to cart button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
    });

    it('Klik to open credit cart', function(){
        testPlaceFFLOrder.clickToOpenCart();
    });

    it('Klik to go to checkout page', function(){
        testPlaceFFLOrder.clickToGoToCheckoutPage();
    });

    it('Provera da li se uctao title on checkout page', function(){
        testPlaceFFLOrder.checkTitleOnPage();
    });

    // it('Provera da li se uctao description on checkout page', function(){
    //     testPlaceFFLOrder.checkDescriptionOnPage();
    //     browser.sleep(5000);
    // });

    it('Enter zip in search field', function(){
        testPlaceFFLOrder.enterZipInSearchField();
    });

    it('Klik on Search page', function(){
        testPlaceFFLOrder.clickOnSearchButton();
    });

    it('Klik to select dealer from the list', function(){
        testPlaceFFLOrder.clickToSelectDealer();
    });

    it('Klik on Next button', function(){
        testPlaceFFLOrder.clickOnNextButton();
    });

    it('Klik on PLACE ORDER button', function(){
        testPlaceFFLOrder.clickOnOrderButton();
    });

    it('Provera da li se uctao Thanks title on Success page', function(){
        testPlaceFFLOrder.checkThanksTitleOnPage();
    });

    it('Provera da li se ucitao success URL', function(){
        testPlaceFFLOrder.checkSuccessURL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});