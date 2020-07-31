import { Config, browser } from 'protractor';

import { reporter } from './helpers/reporter';

SELENIUM_PROMISE_MANAGER: false;


export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],

  //seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();

  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;

    reporter();

  }
};
