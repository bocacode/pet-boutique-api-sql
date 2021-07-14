const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')

const db = mysql.createConnection(dbconfig)

// PUT CUSTOMER-RELATED FUNCTIONS HERE...
exports.getCustomers = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  db.query(`SELECT customers.*, pets.name, pets.type, pets.size
    FROM customers LEFT JOIN pets ON pets.customer_id = customers.id`, (err, rows) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.send(rows)
  })
  db.end()
}

exports.createCustomer = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  // get new customer data from req.body
  const newCustomer = req.body
  // query to create a customer...
  db.query(`INSERT INTO customers VALUES (null, "${newCustomer.first_name}",
  "${newCustomer.last_name}", "${newCustomer.phone}", "${newCustomer.email}");`,
  (err, results) => {
    // if error return error with status 500
      if(err) {
        res.status(500).send(err)
        return
      }
      // otherwise return OK with status 201
      res.status(201).send('Customer created')
    })
  db.end()
}

exports.updateCustomerById = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  let query = "UPDATE customers SET "
  if(req.body.first_name){
    query += `first_name = "${req.body.first_name}"`
  }
  query += ` WHERE id = ${req.params.customerId};`
  console.log(query)
  db.query(query,
    (err, results) => {
      if(err) {
        res.status(500).send(err)
        return
      }
      res.status(202).send(`Customer ${req.params.customerId} updated`)
    })
  db.end()
}
