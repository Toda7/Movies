var register = require('../registracija/registracija-po');
var footAbout = require('./footAbout-po')

describe('Public About Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na About link', function(){
        footAbout.clickOnLink();
    });

    it('Provera About URL-a', function(){
        footAbout.checkAboutURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});