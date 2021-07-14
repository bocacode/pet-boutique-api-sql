const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')


// PUT CUSTOMER-RELATED FUNCTIONS HERE...
exports.getCustomers = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  db.query(`SELECT * FROM customers`, (err, rows) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.send(rows)
  })
  db.end()
}




exports.getCustomersById = (req, res) => {
    const db = mysql.createConnection(dbconfig)
    db.connect()
    const { byId } = req.params
    db.query(`SELECT * from customers WHERE id = ${ byId }`, (err, rows) => { 
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
      if(err) {
        res.status(500).send(err)
        return
      }
      // otherwise return OK with status 201
      res.status(201).send('Customer created')
    })
  db.end()
}