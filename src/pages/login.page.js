class logIn{
    userName;
    password;
    submit;

    constructor(){
     this.userName= cy.get('#user-name')
     this.password= cy.get('#password')
     this.submit= cy.get('#login-button')


    }
    async logIn(userName,password){
        this.userName.type(userName)
        this.password.type(password)
        this.submit.click()
    }
}

export default new logIn()