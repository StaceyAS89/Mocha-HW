/// <reference types="cypress"/>

const data = [
  {testName: 'Jane Doe', expectedName: 'Jane Doe', testEmail: 'Jane Doe@gmail.com', expectedEmail: 'Jane Doe@gmail.com'},
  {testName: 'JaneDoe', expectedName: 'JaneDoe', testEmail: 'JaneDoe@gmail.com', expectedEmail: 'JaneDoe@gmail.com'},
  {testName: 'Jane_Doe', expectedName: 'Jane_Doe', testEmail: 'Jane_Doe@gmail.com', expectedEmail: 'Jane_Doe@gmail.com'},
  {testName: 'Jane Doe Doo', expectedName: 'Jane Doe Doo', testEmail: 'Jane Doe Doo@gmail.com', expectedEmail: 'Jane Doe Doo@gmail.com'},
  {testName: 'Jane', expectedName: 'Jane', testEmail: 'Jane@gmail.com', expectedEmail: 'Jane@gmail.com'},
  {testName: 'JaneAS', expectedName: 'JaneAS', testEmail: 'JaneAS@gmail.com', expectedEmail: 'JaneAS@gmail.com'},
  {testName: 'Jane15', expectedName: 'Jane15', testEmail: 'Jane15@gmail.com', expectedEmail: 'Jane15@gmail.com'},
  {testName: 'Jane$', expectedName: 'Jane$', testEmail: 'Jane$@gmail.com', expectedEmail: 'Jane$@gmail.com'},
  {testName: ' ', expectedName: ' ', testEmail: ' ', expectedEmail: ' '},
  {testName: '@#$%^$%&^&*=+*/?', expectedName: '@#$%^$%&^&*=+*/?', testEmail: '@#$%^$%&^&*=+*/?@gmail.com', expectedEmail: '@#$%^$%&^&*=+*/?@gmail.com'},
  {testName: '1234567890', expectedName: '1234567890', testEmail: '1234567890@gmail.com', expectedEmail: '1234567890@gmail.com'},
  {testName: 'Jane_Doe', expectedName: 'Jane_Doe', testEmail: 'Jane_Doe@gmail.com', expectedEmail: 'Jane_Doe@gmail.com'},
]

data.forEach(({testName, expectedName, testEmail, expectedEmail}) => {
  it('passes', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type(`${testName}`);
    cy.get('[placeholder="Jane Doe"]').should("contain.value", `${expectedName}`);
    cy.get('form>[placeholder="Email"]').type(`${testEmail}`);
    cy.get('form>[placeholder="Email"]').should("contain.value",`${expectedEmail}`);
    cy.get('form > nb-checkbox').click();
    cy.get('form> [status="primary"]').click();
  })
})


