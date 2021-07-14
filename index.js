const express = require('express')
const { getCustomers, createCustomer, deleteCustomer, updateCustomerById, getCustomersByFname } = require('./src/customers')
const { getPetById, getPets, getPetByName, updatePet, deletePets } = require("./src/pets")

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get("/pets/name/:petname", getPetByName)
app.get('/pets/:byId', getPetById)
app.get('/customers/:firstName', getCustomersByFname)
app.get('/customers', getCustomers)
app.get('/pets', getPets)

app.delete('/pets/:id', deletePets)
app.delete("/customers/:id", deleteCustomer)

app.post('/customers', createCustomer)

app.patch('/customers/:customerId' , updateCustomerById)
app.patch('/pets/:id', updatePet)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})
