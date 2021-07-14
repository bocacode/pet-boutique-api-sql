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

exports.updatePet = (req, res) => {
    const db = mysql.createConnection(dbconfig)
    db.connect()
    
    let query = `UPDATE pets SET`
    
    if(req.body.name){
        query += ` name = "${req.body.name}",`
    }
    if(req.body.type){
        query += ` type = "${req.body.type}",`
    }
    if(req.body.size){
        query += ` size = "${req.body.size}",`
    }
    query = query.substring(0, query.length - 1)
    query += ` WHERE id = ${req.params.id}`

    db.query(query, 
        (err, results) => {
        if (err) {
            res.status(500).send(err)
            return
        
        }
        res.status(202).send(`Accepted`)
        
    })
    db.end()
}