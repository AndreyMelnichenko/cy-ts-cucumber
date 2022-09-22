import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DataTable } from "@cucumber/cucumber"

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
  assert.deepEqual({}, {});
});

When(/^I pass table$/, (dTable: DataTable) => {
  cy.log(`${JSON.stringify(dTable)}`)
  cy.log(`raw join: ${dTable.raw().join()}`)
  cy.log(`content by key: ${dTable.hashes()[0].a}`)
  // console.log(`${JSON.stringify(dTable)}`)

});