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
