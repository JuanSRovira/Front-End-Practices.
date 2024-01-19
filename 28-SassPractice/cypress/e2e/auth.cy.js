describe('Funcionalidad del LogIn', () => {
  it('Mia plicacion carga cuando visita /', () => {
    //1: Arrange: Set Up de la app

    //2: Act: Obtener el conenedor
    cy.visit('/')
    cy.get('h1').first().contains('Home') //3: Assert: Esperar tener un resultado
    cy.get('h1').last().contains('Bienvenido')
  })

  it('Prueba con LogIn de CUSTOMER', () =>{
    cy.intercept('POST', 'http://localhost:3000').as('login')
    //ARRANGE
    cy.visit('/login')
    //2: ACT
    cy.get('input[type="email"]').type("drstrange@marvel.com")
    cy.get('input[type="email"]').should('have.value', "drstrange@marvel.com")

    cy.get('input[type="password"]').type("multiverso")
    cy.get('input[type="password"]').should('have.value', "multiverso")

    cy.get('button[type="submit"]').click()

  } )

  it('Prueba con LogIn de ADMIN', () =>{
    cy.intercept('POST', 'http://localhost:3000').as('login')
    //ARRANGE
    cy.visit('/login')
    //2: ACT
    cy.get('input[type="email"]').type("superman@dc.com")
    cy.get('input[type="email"]').should('have.value', "superman@dc.com")

    cy.get('input[type="password"]').type("superman")
    cy.get('input[type="password"]').should('have.value', "superman")

    cy.get('button[type="submit"]').click()

  } )
})