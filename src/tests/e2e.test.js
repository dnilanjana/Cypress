describe('some description',()=>{
    it('todoLogin',()=>{
        cy.visit('https.com')
        cy.get('.class').type('password{enter}')
        .type('anotherpass{enter}')
        cy.get('locator').should('have.length',2)

    })
})

//component testing 
describe('some description',()=>{
    it('component',()=>{
        const todos= [{
            text: 'Buy milk', id: 1
        },{
            text: 'Buy water', id: 2
        }
    ]
cy.mount(<TodoList todos={todos} ></TodoList>)
cy.get('[data-testid="todos"]').should('have.length',todos.length)
    })
})

//api

describe('apiTest',()=>{
    it('getApi',()=>{
        cy.request({
            method:'Get',
            url: '/v1/invoice',
            body: {
                title: 'Write REST API'
            }
        }).then(({status,body})=>{
            body.should('deep.contain',{title: 'Write REST API',
            completed: false,})
            expect(status).to.eq(200)
        })
    })
})



//mockAPI

it('mocking the api',()=>{
    cy.intercept('GET','url.com',{
        statusCode:200,
        body: { message: 'Success' },
    }).as('apiStub')

    cy.visit('/page-that-makes-api-call');

cy.wait('@apiStub')
}
)