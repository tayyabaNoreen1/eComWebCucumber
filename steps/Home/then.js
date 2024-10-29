const { Then } = require('@wdio/cucumber-framework');
import checkProducts from "../../support/assertions/checkProducts";

// Then(/^(no )?products are listed$/, notListed => {
//     if (notListed) {
//         checkProducts(false);
//     } else {
//         checkProducts(true);
//     }
// });


Then(/^a no results error message is shown$/, (notListed) => {
    if (notListed) {
        checkProducts(false);
    } else {
        checkProducts(true);
    }
});


