const mysql = require('mysql2');
const express = require('express')
const app = express()

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Siddik@1234",
    database: 'quotes'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    con.query('select * from details', (err, resp) => {
        if (err) throw err
        res.send(resp)
    })
})

app.post('/insert', (req, res) => {
    con.query("INSERT INTO `details` VALUES (1,'this is quote')", (err, resp) => {
        if (err) throw err;
        res.send(resp)
    })
})

app.put('/update', (req, res) => {
    con.query("UPDATE `details` SET quote = 'this is an update quote' WHERE id=1", (err, resp) => {
        if (err) throw err;
        res.send(resp)
    })
})

app.delete('/delete', (req, res) => {
    con.query("DELETE FROM `details` WHERE id=1", (err, resp) => {
        if (err) throw err;
        res.send(resp)
    })
})

app.listen(3000, () => { console.log('server is runnnig') })