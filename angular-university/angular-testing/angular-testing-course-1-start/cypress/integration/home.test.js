const cypress = require("cypress");

describe("Home Page", () => {
  it("should display a list of courses", () => {
    // expect(true).to.equal(true);
    cy.visit("/");
    cy.contains("All Courses");
  });
});
