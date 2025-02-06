// cypress/integration/academia_lotus_spec.js
import { obterDiaUtilAnterior, formatarData } from '../support/utils';

describe('Academia Lotus', () => {

  const email = 'mairon@milanezierodrigues.com';
  const senha = 'Mr130815';

  let dUtilAnterior;

  before(() => {
    const dataAtual = new Date();
    const diaUtilAnterior = obterDiaUtilAnterior(new Date(dataAtual));
    dUtilAnterior = formatarData(diaUtilAnterior);
  });

  it('passes', () => {
    cy.visit('https://app.sistemasca.com/login');
    cy.login(email, senha);                                                // Login

    cy.get('#c_men_lnkFin > .ilu > .ico').click();                         // Financeiro
    cy.get('#c_updRecForGer > .caixa > :nth-child(1) > .dir').click();     // Ver tuddo
    cy.get(':nth-child(6) > label').click();                               // Outro período
    cy.get('#c_txtFilInicio').clear().type('01/01/2024');                  // Data inicio
    cy.get('#c_txtFilFim').clear().type(dUtilAnterior);                    // Data Fim
    cy.get('#c_btnFilAva').click();                                        // Filtrar
    cy.get('#c_abaMov').click();                                           // Movimentções
    cy.get('.il-download').click();                                        // Baixar
    cy.get('#c_btnExpPer').click();                                        // Personalizado
    cy.get('#r_exp_btnExp').click();                                       // Exportar
    cy.get('#r_exp_btnFec > .i-deletar').click();                          // X
    cy.get('#updCabUsu > .menu-aux > .elemento').click();                  // Menu Sair
    cy.get('#btnSai').click();                                             // Sair
  });
});
