const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')


exports.getPetById = (req, res) => {
    const db = mysql.createConnection(dbconfig)
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

exports.getPetByName = (req, res) => {
    const db = mysql.createConnection(dbconfig)
    db.connect()
    db.query(`SELECT * FROM pets WHERE pets.name = "${req.params.petname}"`, (err,results) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(results)
    })
    db.end()
}