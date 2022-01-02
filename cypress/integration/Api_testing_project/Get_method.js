
describe('API testing project', () => {
    // Create a test case to check that the response og a get requet = 200
    it.skip('Get_testing', () => {

        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    // Check post values directly 
    it.skip('Post method', () => {
        let body = { "name": "test", "salary": "123", "age": "23" }

        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create', body)
            .its('body')
            .its('data')
            .should('include', { name: 'test' })
    })

    // make a post method than return a specific method
    it.skip('Return values from a post method', () => {
        let body = { "name": "test", "salary": "123", "age": "23" }

        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create', body).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.data).to.have.property('name', 'test')
            cy.log('The value to return is ' + response.body.data.name)
        })

    })
   // Update method to update values
    it.skip('Update methods', () => {
        let Json = { "name":"test_ab" }

        cy.request({method:"PUT",
         url:"http://dummy.restapiexample.com/api/v1/update/1" ,
         body: Json

        })

    


})
})