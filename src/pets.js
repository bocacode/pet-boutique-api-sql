const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')

const db = mysql.createConnection(dbconfig)

exports.getPets = (req, res) => {
    db.connect()
    db.query(`SELECT * FROM pets`, (err, rows) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(rows)
    })    
      db.end()
}