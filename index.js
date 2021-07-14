const express = require('express')
const { getCustomers } = require('./src/customers')

const app = express()

// PUT ROUTES HERE...
app.get('/customers', getCustomers)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000...')
})