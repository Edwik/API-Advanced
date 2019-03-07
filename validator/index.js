'use strict'

const { jsonResponse } = require('../tools/jsonResponse')
const errorCode = require('../values/errorCode')

function validator_res (err, objet){
    if(err) return jsonResponse(false,errorCode.e001)
    if(!objet) return jsonResponse(false,errorCode.e002)

    return jsonResponse(true,errorCode.e000)
}

module.exports = {validator_res}