const express = require('express')
const { getCustomers, createCustomer, deleteCustomer, updateCustomerById } = require('./src/customers')
const { getPetById, getPets, getPetByName } = require("./src/pets")

const app = express()
app.use(express.json())

// PUT ROUTES HERE...
app.get("/pets/name/:petname", getPetByName)
app.get("/customers", getCustomers)
app.get("/pets/:byId", getPetById)
app.get("/pets", getPets)

app.delete("/customers/:id", deleteCustomer)

app.post("/customers", createCustomer)

app.patch('/customers/:customerId' , updateCustomerById)

app.listen(3000, () => {
  console.log("listening on http://localhost:3000...")
})
