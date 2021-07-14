<<<<<<< HEAD
const express = require("express")
const {
  getCustomers,
  createCustomer,
  deleteCustomer,
} = require("./src/customers")
=======
const express = require('express')
const { getCustomers, createCustomer } = require('./src/customers')
const { getPetById, getPets } = require('./src/pets')
>>>>>>> main

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
<<<<<<< HEAD
=======
app.get('/customers', getCustomers)
app.get('/pets/:byId', getPetById)
app.get('/pets', getPets)

>>>>>>> main

app.delete("/customers/:id", deleteCustomer)

app.get("/customers", getCustomers)

app.post("/customers", createCustomer)

app.listen(3000, () => {
<<<<<<< HEAD
  console.log("listening on http://localhost:3000...")
})
=======
  console.log('listening on http://localhost:3000...')
})




>>>>>>> main
