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
   
prepareReturnPolicy: [
    './gfShop/prepareReturnPolicy/prepareReturnPolicy-spec.js'
  ],

prepareTestUser: [
  './gfShop/prepareTestUser/prepareTestUser-spec.js'
],

prepareTestCreditCard: [
    './gfShop/prepareTestCreditCard/prepareTestCreditCard-spec.js'
  ],
   
prepareMagentoCoupon: [
    './gfShop/prepareMagentoCoupon/prepareMagentoCoupon-spec.js'
  ],

prepareTestCreditCardMagento: [
    './gfShop/prepareTestCreditCardMagento/prepareTestCreditCardMagento-spec.js'
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
   jasmine.getEnv().addReporter(new SpecReporter({
     spec: {
       displayStacktrace: true
     }
   }));

 }

};