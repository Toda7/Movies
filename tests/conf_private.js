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
  
  login: [
    './private/account/login/login-spec.js'
  ],

  // ra_home: [
  //   './private/ra_premium/ra_home/ra_home-spec.js'
  // ],

  // ra_drop_menu: [
  //   './private/ra_premium/ra_drop_menu/ra_drop_menu-spec.js'
  // ],

  // ra_go_to_legacy_app: [
  //   './private/ra_premium/ra_go_to_legacy_app/ra_go_to_legacy_app-spec.js'
  // ],
  
  ra_create_inprogress_template: [
    './private/ra_premium/ra_create_inprogress_template/ra_create_inprogress_template-spec.js'
  ],

  ra_edit_inprogress_template: [
    './private/ra_premium/ra_edit_inprogress_template/ra_edit_inprogress_template-spec.js'
  ],

  ra_delete_inprogress_template: [
    './private/ra_premium/ra_delete_inprogress_template/ra_delete_inprogress_template-spec.js'
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