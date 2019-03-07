/*
* controller auto-generate
* by Edwin Anaya
*/

'use strict'
const Model = require('../models/epayco')
const validator = require('../validator')

let epayco_vars = require('epayco-node')({
    apiKey: '',
    privateKey: '',
    lang: 'ES',
    test: true
})

let epayco_url = {
    url_response: "",
    url_confirmation: "",
    method_confirmation: "POST"
}

function index (req, res) { //index method for showAll
    Model.find({}, (err, data)=>{

        const vr = validator.validator_res(err,data)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({data})
    })
}

function show (req, res) { // find method
}

function store (req, res) { //create method
}

function update (req, res) { //update method
}

function destroy (req, res) { //delete method
}

function epayco (req, res) {
    let entidad = req.body.entidad //efecty, baloto, gana, redServi, puntored

    console.log(req.body)

    
    let cash_info = {
        invoice:        req.body.invoice,
        description:    req.body.description,
        value:          req.body.value,
        tax:            req.body.tax,
        tax_base:       req.body.tax_base,
        currency:       req.body.currency,
        type_person:    req.body.type_person,
        doc_type:       req.body.doc_type,
        doc_number:     req.body.doc_number,
        name:           req.body.name,
        last_name:      req.body.last_name,
        email:          req.body.email,
        cell_phone:     req.body.cell_phone,
        end_date:       req.body.end_date,

        url_response:        epayco_url.url_response,
        url_confirmation:    epayco_url.url_confirmation,
        method_confirmation: epayco_url.method_confirmation,
    }
    epayco_vars.cash.create(entidad, cash_info)
        .then(function(cash) {
            res.status(200).send({msg: `Enviado a epayco!`, cash, cash_info})
        })
        .catch(function(err) {
            res.status(500).send({msg: `No enviado a epayco!: ${err}`})
        });
        
}

function url_response(req, res){
    let data = new Model(req.body);
    data.save( (err, stored)=>{
        const vr = validator.validator_res(err,stored)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({stored})
    })
}

function url_confirmation(req, res){
    let data = new Model(req.body);
    data.save( (err, stored)=>{
        const vr = validator.validator_res(err,stored)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({stored})
    })
}

module.exports = { index, show, store, update, destroy, epayco, url_response, url_confirmation }