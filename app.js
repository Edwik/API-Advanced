'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)
app.get('/', (req,res) =>{
    res.status(200).send({msg: 'Hello coder! welcome to Api by Edwin Anaya.'})
})

app.use(function(req, res, next) {
    return res.status(404).send({ msg: 'Route'+req.url+' Not found.' });
});

// app.use(function(err, req, res, next) {
//     return res.status(500).send({ msg: "500 server error", error: err });
// });

module.exports = app