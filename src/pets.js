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
