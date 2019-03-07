'use strict'
const string = require('../values/strings/spanish')

module.exports ={
    e000:{
        icode: 'e000',
        code: '200',
        msg: `${string.code200}`,
    },
    e001:{
        icode: 'e001',
        code: '500',
        msg: `${string.code500}`,
    },
    e002:{
        icode: 'e002',
        code: '404',
        msg: `${string.code404}`,
    },
}

//Vehicle:(placa)=>`vehiculos/fetch/${placa}`,