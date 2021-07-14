const express = require('express')
const { createCustomer } = require('./src/customers')

const app = express()

// PUT ROUTES HERE...
app.post('/customers', createCustomer)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})