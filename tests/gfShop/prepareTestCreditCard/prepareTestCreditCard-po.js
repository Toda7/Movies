function landOnAplsHomePage() {
    // Dolazak na ALPS product details page in shop
    browser.get('https://shop.outfitterextreme.com/stealthcam/accessories/security-bear-box-for-px-series.html'); 
    browser.sleep(2000);
 }

function clickOnAddToCart() {
    //  Klik na add to cart button
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(2000);
 }

function clickToOpenCart() {
    //  Klik to open credit cart
    element(by.className('action showcart')).click();
    browser.sleep(2000);
 }

function clickToGoToCheckoutPage() {
    //  Klik to go to checkout page 
    element(by.className('action primary checkout btn-lg')).click();
    browser.sleep(5000);
}

function clickOnNextButton() {
    //  Klik on Next button
    element(by.className('button action continue primary btn-lg')).click();
    // element(by.partialLinkText('NEXT')).click();
    browser.sleep(3000);
}

function clickOnCreditCartToOpenDrop() {
    //  Klik on credit cart to open drop 
    element(by.id('authnetcim-card-id')).click();
    browser.sleep(6000);
}

function clickToAddNewCard() {
    //  Klik na complete link from side menu
    element(by.css('select#authnetcim-card-id.select')).all(by.tagName('option')).get(0).click(); 
    // element(by.css('select#authnetcim-card-id.select')).click();
    browser.sleep(6000);
}

function enterNumbersCreditCard() {
    // Unosenje numbers credit card 
    element(by.css('.checkout-payment-method .ccard .number .input-text')).clear().sendKeys('5105105105105100');
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
    browser.sleep(6000);
 }

function clickToOpenMonth() {
    //  Klik to open month drop 
    element(by.className('select month')).click();
    browser.sleep(6000);
}

function selectMonth() {
    // Selektovanje meseca
    element(by.css('select#authnetcim-cc-exp-month.select.month')).all(by.tagName('option')).get(3).click(); 
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
    browser.sleep(6000);
}

function clickToOpenYear() {
    //  Klik to open year drop 
    element(by.className('select year')).click();
    browser.sleep(6000);
}

function selectYear() {
    // Selektovanje godine 
    element(by.css('select#authnetcim-cc-exp-year.select.year')).all(by.tagName('option')).get(3).click(); 
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
    browser.sleep(6000);
 }

function enterCvvNumber() {
    // Unosenje cvv numbers
    element(by.css('.checkout-payment-method .ccard .cvv .input-text')).sendKeys('123');
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
    browser.sleep(6000);
 }

function clickOnPlaceOrder() {
    //  Klik on PLACE ORDER button
    element(by.className(' action primary checkout')).click();
    browser.sleep(9000);
}

function enterNumbersCreditCard1() {
    // Unosenje numbers credit card 
    element(by.css('.checkout-payment-method .ccard .number .input-text')).clear().sendKeys('4111111111111111');
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
    browser.sleep(6000);
 }

//  function enterNumbersCreditCard2() {
//     // Unosenje numbers credit card 
//     element(by.css('.checkout-payment-method .ccard .number .input-text')).clear().sendKeys('6011000990139424');
//     // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
//     browser.sleep(6000);
//  }


 module.exports = {
    landOnAplsHomePage,
    clickOnAddToCart,
    clickToOpenCart,
    clickToGoToCheckoutPage,
    clickOnNextButton,
    clickOnCreditCartToOpenDrop,
    clickToAddNewCard,
    enterNumbersCreditCard,
    clickToOpenMonth,
    selectMonth,
    clickToOpenYear,
    selectYear,
    enterCvvNumber,
    clickOnPlaceOrder,
    enterNumbersCreditCard1,
    // enterNumbersCreditCard2,
 }