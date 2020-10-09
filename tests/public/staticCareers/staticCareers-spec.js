var staticCareers = require('./staticCareers-po.js')

describe('Careers strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na Careers stranu', function(){
        staticCareers.landOnCareers();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text u glavnoj sekciji', function(){
        staticCareers.checkMainSectionText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u Culture sekciji', function(){
        staticCareers.checkCultureSectionText();
        browser.sleep(500)
    });

    it('Provera da li je prvo Email Us dugme dobro linkovano', function(){
        staticCareers.checkFirstEmailUsButton();
        browser.sleep(500)
    });

    it('Provera da li je drugo Email Us dugme dobro linkovano', function(){
        staticCareers.checkSecondEmailUsButton();
        browser.sleep(500)
    });

    it('Otvori Intercom', function(){
        staticCareers.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticCareers.closeIntercom();
        browser.sleep(1000)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});