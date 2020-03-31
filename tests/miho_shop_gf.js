let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let failFast = require('protractor-fail-fast');

exports.config = {
  plugins: [failFast.init()],
  afterLaunch: function () {
    failFast.clean(); // Removes the fail file once all test runners have completed.
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {

    // opt: [
    //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluzi nicemu. to je samo primer)
    // ],

    // logInAsUser: [
    //     './gfShop/logInAsUser/logInAsUser-spec.js'
    //   ],

    // testErrorMessageOnProductDetails: [
    //     './gfShop/testErrorMessageOnProductDetails/testErrorMessageOnProductDetails-spec.js'
    //   ],
    
    // testPoBoxAddress: [
    //     './gfShop/testPoBoxAddress/testPoBoxAddress-spec.js'
    //   ],
  
    //   testPoBoxAddressFromCheckout: [
    //     './gfShop/testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-spec.js'
    //   ],

    // testMyOrders: [
    //     './gfShop/testMyOrders/testMyOrders-spec.js'
    //   ],

    // prepareProductsForTest: [
    //     './gfShop/prepareProductsForTest/prepareProductsForTest-spec.js'
    //   ],

      // testEditQtyCart: [
      //   './gfShop/testEditQtyCart/testEditQtyCart-spec.js'
      // ],
      // sljaka

      // testProductMessage: [
      //   './gfShop/testProductMessage/testProductMessage-spec.js'
      // ],
      // promenjena error poruka

      // testDeleteProductCart: [
      //   './gfShop/testDeleteProductCart/testDeleteProductCart-spec.js'
      // ],
      // sljaka

      // testWrongCouponCode: [
      //   './gfShop/testWrongCouponCode/testWrongCouponCode-spec.js'
      // ],
      // sljaka

      testCancelCoupon: [
        './gfShop/testCancelCoupon/testCancelCoupon-spec.js'
      ],
},

capabilities: {
  browserName: 'chrome',
  'chromeOptions': {
    'args': ['--disable-gpu', '--window-size=2880,1800']
  }
},
jasmineNodeOpts: {
  print: function () { },
  showColors: true,
  defaultTimeoutInterval: 300000
},

allScriptsTimeout: 60 * 1000 * 60,

onPrepare: function () {
  // Ovaj deo koda je za Jasmin reporter u terminalu
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));

}

};