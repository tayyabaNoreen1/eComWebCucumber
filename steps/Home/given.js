const { Given } = require('@wdio/cucumber-framework');
import goToPage from "../../support/actions/goToPage";

// Given(/^the browser is at the "(Home)" page$/, page => {
//     goToPage(page);
// });



Given(/^the browser is at the "(Home|Login)" page$/, (page) => {
    console.log(page);
    goToPage(page);
});

