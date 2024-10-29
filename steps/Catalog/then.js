const { Then } = require('@wdio/cucumber-framework');
import checkNoResultsError from "../../support/assertions/checkNoResultsError";
import checkProducts from "../../support/assertions/checkProducts";
import checkProductsContain from "../../support/assertions/checkProductsContain";
import checkTitle from "../../support/assertions/checkTitle";

// Then(/^(no )?products are listed$/, notListed => {
//     if (notListed) {
//         checkProducts(false);
//     } else {
//         checkProducts(true);
//     }
// });



Then(/^no products are listed$/, () => {
    // if (notListed) {
    //     checkProducts(false);
    // } else {
    //     checkProducts(true);
    // }

    checkProducts(false);
});


Then(/^products are listed$/, () => {
    // if (notListed) {
    //     checkProducts(false);
    // } else {
    //     checkProducts(true);
    // }

    //checkProducts(true);
    checkProducts(false);
});




Then(/^a no results error message is shown$/, () => {
    checkNoResultsError();
});






// Then(/^search results show products related to "(.*)"$/, keyword => {
//     checkProductsContain(keyword);
// });



Then(/^search results show products related to "([^"]*)"$/, (keyword) => {
    console.log(keyword);
    checkProductsContain(keyword);
});


Then(/^the title of the page should be "(.*)"$/, title => {
    checkTitle(title);
});
