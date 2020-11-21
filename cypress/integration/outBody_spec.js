describe("cy.contain() Does Not Work Outside of Body Tag", () => {
  it("does not work", () => {
    cy.visit("localhost:3000"); // first spin up the app on port 3000

    // inside of body
    cy.get("#inbody");
    cy.contains("hello from inside of the body tag");

    // outside of body
    cy.get("#outbody");
    cy.contains("hello from outside of the body tag");
  });
});
