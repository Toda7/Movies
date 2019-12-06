var testReturnPolicy = require('./testReturnPolicy-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');



describe('Test return policy', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na shop home page', function(){
        testReturnPolicy.landOnTrugloPage();
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
    });

    it('Vracanje na home page', function(){
        testReturnPolicy.landOnTrugloPage();
    });

    it('Klik on Return policy link from footer', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
    });

    it('Provera da li se uctao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
    });

    it('Klik na close button to close the window on home page', function(){
        testReturnPolicy.clickCloseButton();
    });

    it('Ucitanje product page da bi proverili return policy', function(){
        testReturnPolicy.landOnProductPage();
    });

    it('Klik on Return policy link from footer on product page', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
    });

    it('Provera da li se uctao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
    });

    it('Klik na close button to close the window on product page', function(){
        testReturnPolicy.clickCloseButton();
    });

    it('Ucitanje my account page da bi proverili return policy', function(){
        testReturnPolicy.landOnMyAccountPage();
    });

    it('Klik on Return policy link from footer on my account page', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
    });

    it('Provera da li se uctao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
    });

    it('Klik na close button to close the window on product page', function(){
        testReturnPolicy.clickCloseButton();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});