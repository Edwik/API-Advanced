/*
* controller auto-generate
* by Edwin Anaya
*/

'use strict'
const Model = require('../models/user')
const validator = require('../validator')

function index (req, res) { //index method for showAll
    Model.find({}, (err, users)=>{

        const vr = validator.validator_res(err,users)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({users})
    }).select('-password')

}

function show (req, res) { // find method
    let userId = req.params.userId
    Model.findById(userId, (err, user)=>{

        const vr = validator.validator_res(err,user)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({user})
    })
}

function store (req, res) { //create method
    //code here
}

function update (req, res) { //update method
    let userId = req.params.userId
    let update = req.body

    Model.findByIdAndUpdate(userId, update, (err, user)=>{

        const vr = validator.validator_res(err,user)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
        res.status(vr.res.code).send({user})
    })
}

function destroy (req, res) { //delete method
    let userId = req.params.userId

    Model.findById(userId, (err, user)=>{
        const vr = validator.validator_res(err,user)
        if(!vr.status) return res.status(vr.res.code).send(`${vr.res.icode}, ${vr.res.msg} \n ${err}`)
    
        user.remove(err => {
            if(err) res.status(500).send( {msg: `error al eliminar: ${err}`})
            res.status(200).send({msg: 'el producto ha sido eliminado'})
        })
    })
}

function hello (req, res) {
    res.send(200, { message: `Hola ${req.params.name}!` })
}

module.exports = { index, show, store, update, destroy, hello }