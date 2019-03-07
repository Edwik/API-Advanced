'use strict'

const Model = require('../models/user')
const service = require('../services')

function signUp (req, res) {

    if (!req.body.email || !req.body.password || !req.body.displayName) return res.status(403).send({msg: 'faltan parametros'})

    Model.findOne({ email: req.body.email}, (err, user) => {

        const userRequest = new Model({
            email: req.body.email,
            displayName: req.body.displayName,
            password: req.body.password
        })

        if (err) return res.status(500).send({msg: err})
        if(user) return res.status(404).send({msg: `Ya Existe el usuario!`})

        userRequest.save((err)=>{
            if(err) return res.status(500).send({msg: `Error al crear usuario ${err}`})
        
            return res.status(200).send({ msg: `usuario creado exitosamente!`, /*token: service.createToken(user)*/ })
        })
    })
}

function signIn (req, res) {

    if (!req.body.email || !req.body.password) return res.status(403).send({msg: 'faltan parametros'})

    Model.findOne({ email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({msg: err})
        if(!user) return res.status(404).send({msg: `no existe el usuario!`})

        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) return res.status(500).send({msg: `! ${err}`})
            if(!isMatch) return res.status(404).send({msg: `contraseña errada!`})

            req.user = user
                res.status(200).send({
                    profile: user.gravatar(),
                    msg: 'Te has logueado correctamente.',
                    token: service.createToken(user)
                })
        })
    })
}

module.exports = { signIn, signUp }