var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testBreadcrumbs = require('./testBreadcrumbs-po.js');

describe('Breadcrumbs', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
        browser.sleep(3000);
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao dobar URL za Product Details stranu', function () {
        testBreadcrumbs.checkProductDetailsPageUrl();
        browser.sleep(500);
    });

    it('Provera da li se ucitao poslednji breadcrumb (ime proizvoda)', function () {
        testBreadcrumbs.checkProductBreadcrumb();
        browser.sleep(500);
    });

    it('Provera da li se ucitao srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.checkCategoryBreadcrumb();
        browser.sleep(500);
    });

    it('Provera da li se ucitao prvi breadcrumb (Home)', function () {
        testBreadcrumbs.checkHomeBreadcrumb();
        browser.sleep(500);
    });

    it('Klik srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.clickCategoryBreadcrumb();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao dobar URL za Category stranu', function () {
        testBreadcrumbs.checkCategoryPageUrl();
        browser.sleep(500);
    });

    it('Provera da li se ucitao srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.checkCategoryBreadcrumb1();
        browser.sleep(500);
    });

    it('Provera da li se ucitao prvi breadcrumb (Home)', function () {
        testBreadcrumbs.checkHomeBreadcrumb();
        browser.sleep(500);
    });

    it('Klik prvi breadcrumb (Home)', function () {
        testBreadcrumbs.clickHomeBreadcrumb();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao dobar URL za Homepage', function () {
        testBreadcrumbs.checkHomepageUrl();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});