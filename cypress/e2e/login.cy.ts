describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can submit when form is filled successfully', () => {
    // Fill in valid data
    cy.get('[data-cy=email-input]').type('test@example.com')
    cy.get('[data-cy=password-input]').type('Test123!@#')
    cy.get('[data-cy=terms-checkbox]').click()

    // Submit button should be enabled
    cy.get('[data-cy=submit-button]').should('not.be.disabled')

    // Submit and verify redirect
    cy.get('[data-cy=submit-button]').click()
    cy.url().should('include', '/success')
  })

  it('shows error message for invalid email', () => {
    // Enter invalid email
    cy.get('[data-cy=email-input]').type('invalid-email')
    cy.get('[data-cy=password-input]').type('Test123!@#')
    
    // Verify error message
    cy.get('[data-cy=email-error]').should('be.visible')
    cy.get('[data-cy=submit-button]').should('be.disabled')
  })

  it('shows multiple error messages for invalid email and password', () => {
    // Enter invalid email and password
    cy.get('[data-cy=email-input]').type('invalid-email')
    cy.get('[data-cy=password-input]').type('weak')
    
    // Verify both error messages
    cy.get('[data-cy=email-error]').should('be.visible')
    cy.get('[data-cy=password-error]').should('be.visible')
    cy.get('[data-cy=submit-button]').should('be.disabled')
  })

  it('keeps button disabled when terms are not accepted', () => {
    // Enter valid email and password but don't accept terms
    cy.get('[data-cy=email-input]').type('test@example.com')
    cy.get('[data-cy=password-input]').type('Test123!@#')
    
    // Verify button remains disabled
    cy.get('[data-cy=submit-button]').should('be.disabled')
  })
})