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

    // staticVendorManagementStandardTerms: [
    //   './public/staticVendorManagementStandardTerms/staticVendorManagementStandardTerms-spec.js',
    // ],

    // staticAbout: [
    //   './public/staticAbout/staticAbout-spec.js',
    // ],

    // staticRiskAssessment: [
    //   './public/staticRiskAssessment/staticRiskAssessment-spec.js',
    // ],

    // staticCareers: [
    //   './public/staticCareers/staticCareers-spec.js',
    // ],

    // staticAft: [
    //   './public/staticAft/staticAft-spec.js',
    // ],

    // staticCxo: [
    //   './public/staticCxo/staticCxo-spec.js',
    // ],

    staticWebinarsCallForSpeakers: [
      './public/staticWebinarsCallForSpeakers/staticWebinarsCallForSpeakers-spec.js',
    ],

  },

  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true,
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