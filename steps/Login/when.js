const { When } = require('@wdio/cucumber-framework');
import signIn from "../../support/actions/signIn";

When(/^the user tries to use valid credentials, "(.*)" to login$/, email => {
    signIn(email);
}
);