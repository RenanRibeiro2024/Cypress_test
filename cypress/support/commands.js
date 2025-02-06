// cypress/support/commands.js
Cypress.Commands.add('login', (email, senha) => {
  cy.get('#txtEmail').clear().type(email);  // Limpar e digitar no campo de e-mail
  cy.get('#btnEmail').click();              // Clica em continuar
  cy.get('#txtSenha').clear().type(senha);  // Limpar e digitar no campo de senha
  cy.get('#btnSistema').click();            // Clica em entrar
});


const email = email;
const senha = senha;