const express = require('express')
const { getCustomers, createCustomer } = require('./src/customers')
const { getPetById, getPets } = require('./src/pets')

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get('/customers', getCustomers)
app.get('/pets/:byId', getPetById)
app.get('/pets', getPets)


app.post('/customers', createCustomer)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})




