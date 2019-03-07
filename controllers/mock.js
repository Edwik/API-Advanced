/*
* controller auto-generate
* by Edwin Anaya
*/

'use strict'
const Model = require('../models/mock')
const validator = require('../validator')

function index (req, res) { //index method for showAll
    Model.find({}, (err, mocks)=>{

        const vr = validator.validator_res(err,mocks)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({mocks})
    })
}

function show (req, res) { // find method
    let mockId = req.params.mockId
    Model.findById(mockId, (err, mock)=>{

        const vr = validator.validator_res(err,mock)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({mock})
    })
}

function store (req, res) { //create method
    
    if(!req.body.rute || !req.body.res || !req.body.title) return res.status(402).send({msg: 'faltan parametros.'})

    let mock = new Model()
    mock.rute = req.body.rute
    mock.headers = req.body.headers
    mock.req = req.body.req
    mock.res = req.body.res
    mock.title = req.body.title
    mock.description = req.body.description

    mock.save( (err, mockStored)=>{
        const vr = validator.validator_res(err,mockStored)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({mock: mockStored})
    })
}

function update (req, res) { //update method
    let mockId = req.params.mockId
    let update = req.body

    Model.findByIdAndUpdate(mockId, update, (err, mock)=>{

        const vr = validator.validator_res(err,mock)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({mock})
    })
}

function destroy (req, res) { //delete method
    let mockId = req.params.mockId

    Model.findById(mockId, (err, mock)=>{
        const vr = validator.validator_res(err,mock)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
    
        mock.remove(err => {
            if(err) res.status(500).send( {msg: `error al eliminar: ${err}`})
            res.status(200).send({msg: 'el producto ha sido eliminado'})
        })
    })
}

module.exports = { index, show, store, update, destroy }