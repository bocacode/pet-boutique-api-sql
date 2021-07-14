const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')

const db = mysql.createConnection(dbconfig)

exports.getPetById = (req, res) => {
    db.connect()
    const { byId } = req.params
    db.query(`SELECT * FROM pets WHERE id = ${ byId }`, (err,rows) => {
        if (err) {
            res.status(500).send(err)
            return 
        }
        res.send(rows)
    })
    db.end()
}

exports.getPets = (req, res) => {
    const db = mysql.createConnection(dbconfig)
    db.query(`SELECT * FROM pets`, (err, rows) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(rows)
    })    
      db.end()
}



exports.deletePets = (req, res) => {
    const db = mysql.createConnection(dbconfig)
    db.connect()
    db.query(`DELETE FROM pets WHERE id = ${req.params.id}`, (err)=> {
        if (err) {
            res.status(203).send(err)
            return
        }
        res.status(500).send("pets deleted")
    })    
      db.end()
}

