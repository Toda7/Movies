var documentDetailsPage = require('./documentDetailsPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var searchOnDocLibPage = require('../searchOnDocLibPage/searchOnDocLibPage-po.js');

describe('Document details page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
        browser.sleep(3000);
    });

    it('Unosenje texta u search polje', function(){
        searchOnDocLibPage.enterValidSearchWord();
        browser.sleep(2000);
    });

    it('Klik na document iz rezultata', function(){
        searchOnDocLibPage.clickOnDocToSeeDocDetailsPage();
        browser.sleep(1000);
    });

    it('Provera URLa nakon klika na doc iz rezultata', function(){
        searchOnDocLibPage.checkDocumentDetailsURL();
    });

    it('Provera da li se ucitao breadcrumbs', function(){
        documentDetailsPage.checkBreadcrumbs();
    });

    it('Provera da li se ucitao doc icon(pdf)', function(){
        documentDetailsPage.checkDocIcon();
    });

    it('Provera da li se ucitao doc title', function(){
        documentDetailsPage.checkDocTitle();
    });

    it('Provera da li su se ucitali topici u kartici', function(){
        documentDetailsPage.checkTopics();
    });

    it('Provera da li je dobar user avatar na document details page', function(){
        documentDetailsPage.checkUserAvatar();
    });

    it('Provera da li se ucitao user name', function(){
        documentDetailsPage.checkUserName();
    });
    
    it('Provera da li se ucitao reputation score', function(){
        documentDetailsPage.checkReputationScore();
    });

    it('Provera da li se ucitao direct message link', function(){
        documentDetailsPage.checkDirectMessage();
    });

    it('Provera da li se ucitao user function level', function(){
        documentDetailsPage.checkFunctionLevel();
    });

    it('Provera da li se ucitao org link', function(){
        documentDetailsPage.checkOrgLink();
    });

    it('Provera da li se ucitao org size', function(){
        documentDetailsPage.checkOrgSize();
    });

    it('Provera da li se ucitala discussion gde smo objavili document', function(){
        documentDetailsPage.checkDiscussionLinkWhereDocIsPosted();
    });

    it('Provera da li se ucitao Download button', function(){
        documentDetailsPage.checkDownloadButton();
    });

    it('Provera da li se ucitao Thanks button', function(){
        documentDetailsPage.checkThanksButton();
    });

    it('Provera da li se ucitao Share button', function(){
        documentDetailsPage.checkShareButton();
    });


    it('Provera da li se poll header ucitao', function(){
        docLibraryCheck.checkPollHeader();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    });

    it('Provera da li se poll title ucitao', function(){
        docLibraryCheck.checkPollTitle();
    });

    it('Provera da li se ucitalo prvo pitanje', function(){
        docLibraryCheck.checkFirstQuestion();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
