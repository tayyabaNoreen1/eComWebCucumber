const { When } = require('@wdio/cucumber-framework');
import search from "../../support/actions/search";

import selectMenuOption from "../../support/actions/selectMenuOption";

// When(/^the user searches for "(.*)"$/, keyword => {
//     search(keyword);
// });



When(/^the user searches for "([^"]*)"$/, keyword => {
    console.log(keyword);
    search(keyword);
});


When(/^the user clicks on the "(.*)" menu option in the menu$/, option => {
    selectMenuOption(option);
});