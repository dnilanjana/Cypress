// import { beforeEach } from 'mocha'
// import logIn from '../pages/login.page'



// describe('Login page tests', function () {
  
//     it('should show empty field error messages', function () {
//       cy.visit('https://www.saucedemo.com/')
//       logIn.logIn('standard_user','secret_sauce')
//     })
// })


// describe('some description',function(){
//   beforeEach(function(){

//   })
//   it('testdescription',function(){

//   })
// })

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})