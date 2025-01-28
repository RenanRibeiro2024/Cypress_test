describe('Academia Lotus', () => {
  it('passes', () => {
    // Função para obter o dia útil anterior
    function obterDiaUtilAnterior(data) {
      let diasParaReduzir = 1;
      while (diasParaReduzir > 0) {
        data.setDate(data.getDate() - 1);
        if (data.getDay() !== 0 && data.getDay() !== 6) { // 0 = Domingo, 6 = Sábado
          diasParaReduzir -= 1;
        }
      }
      return data;
    }

    function formatarData(data) {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }

    // Configuração da data
    const dataAtual = new Date();
    const diaUtilAnterior = obterDiaUtilAnterior(new Date(dataAtual));
    const dUtilAnterior = formatarData(diaUtilAnterior);

    // Teste Cypress
    cy.visit('https://app.sistemasca.com/login')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#txtEmail').clear('mairon@milanezierodrigues.com');
    cy.get('#txtEmail').type('mairon@milanezierodrigues.com{enter}');
    cy.get('#txtSenha').clear('Mr130815');
    cy.get('#txtSenha').type('Mr130815{enter}');
    cy.get('#c_men_lnkFin').click();
    cy.get('#c_updRecForGer > .caixa > :nth-child(1) > .dir').click();
    cy.get(':nth-child(6) > label').click();
    /* ==== End Cypress Studio ==== */
    //cy.get('#txtSenha').type(dia_anterior);

    // Usa o valor da data útil anterior
    //cy.get('#txtSenha').type(dUtilAnterior);
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#c_txtFilInicio').clear();
    cy.get('#c_txtFilInicio').type(dUtilAnterior);
    cy.get('#c_txtFilFim').clear();
    cy.get('#c_txtFilFim').type(dUtilAnterior);
    cy.get('#c_btnFilAva').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#c_abaMov').click();
    cy.get('.il-download').click();
    cy.get('#c_btnExpPer').click();
    cy.get('#r_exp_btnExp').click();
    cy.get('#r_exp_btnFec > .i-deletar').click();
    cy.get('#updCabUsu > .menu-aux > .elemento').click();
    cy.get('#btnSai').click();
    /* ==== End Cypress Studio ==== */
  });
});
