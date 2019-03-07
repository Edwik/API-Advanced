'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MockSchema = Schema({
    rute: String,
    headers: String,
    req: String,
    res: String,
    title: String,
    description: String
})

module.exports = mongoose.model('Mock', MockSchema)