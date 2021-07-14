const express = require('express')
const { getCustomers, createCustomer } = require('./src/customers')
const { getPetById, getPets, deletePets } = require('./src/pets')

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get('/customers', getCustomers)
app.get('/pets/:byId', getPetById)
app.get('/pets', getPets)

app.delete('/pets/:id', deletePets)

app.post('/customers', createCustomer)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})




