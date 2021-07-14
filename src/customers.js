const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')

const db = mysql.createConnection(dbconfig)

// PUT CUSTOMER-RELATED FUNCTIONS HERE...
exports.getCustomers = (req, res) => {
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