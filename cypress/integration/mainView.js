describe('Main page flow', () => {

    it('should allow user to visit the main page and see a title', () => {
      cy.visit("http://localhost:19003")
      .contains("planty dropper")
      
    })


  });
