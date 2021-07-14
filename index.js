const express = require('express')
const { getCustomers, createCustomer, getCustomersByFname, deleteCustomer } = require('./src/customers')
const { getPetById, getPets, updatePet } = require('./src/pets')

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get('/customers/:firstName', getCustomersByFname)
app.get('/customers', getCustomers)
app.get('/pets/:byId', getPetById)
app.get('/pets', getPets)

app.delete("/customers/:id", deleteCustomer)

app.post('/customers', createCustomer)

app.patch('/pets/:id', updatePet)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})
