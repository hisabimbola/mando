'use strict';
//config file for protractor
exports.config = {

  baseUrl: 'http://localhost:3000',
  //multicapabilities to run different instances of the browser
  multiCapabilities: [{
    'browserName': 'chrome',
    'specs': ['e2e/*Spec.js'],
    'exclude': ['e2e/authentication.campaign.e2e.client.Spec.js']
  }, {
    'browserName': 'chrome',
    'specs': ['e2e/authentication.campaign.e2e.client.Spec.js']
  }],
  onPrepare: function() {
    // The require statement must be down here, since jasmine-reporters@1.0
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
        new jasmine.JUnitXmlReporter('xmloutput', true, true)
    );
  }
};