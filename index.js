const express = require('express')
const { getCustomersById, createCustomer, getCustomers } = require('./src/customers')

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get('/customers/:byId', getCustomersById)

app.get('/customers', getCustomers)

app.post('/customers', createCustomer)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})