'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EpaycoSchema = Schema({

    /* send transaction */
    invoice: String,
    description: String,
    value: String,
    tax: String,
    tax_base: String,
    currency: String,
    type_person: String,
    doc_type: String,
    doc_number: String,
    name: String,
    last_name: String,
    email: String,
    cell_phone: String,
    end_date: String,

    /* epayco repsonse */
    ref_payco: String,
    factura: String,
    descripcion: String,
    valor: String,
    iva: String,
    baseiva: String,
    moneda: String,
    estado: String,
    respuesta: String,
    autorizacion: String,
    recibo: String,
    fecha: String,
    pin: String,
    codigoproyecto: String,
    fechaexpiracion: String,
    factor_conversion: String,
    valor_pesos: String,

    /* epayco confirmation */
    x_cust_id_cliente: String,
    x_description: String,
    x_amount_ok: String,
    x_id_invoice: String,
    x_amount_base: String,
    x_tax: String,
    x_currency_code: String,
    x_franchise: String,
    x_transaction_date: String,
    x_approval_code: String,
    x_transaction_id: String,
    x_ref_payco: String,
    x_cod_response: String,
    x_cod_transaction_state: String,
    x_transaction_state: String,
    x_signature: String,
    x_response: String,
    x_response_reason_text: String,
    x_extra1: String,
    x_extra2: String,
    x_extra3: String,
    x_customer_doctype: String,
    x_customer_document: String,
    x_customer_name: String,
    x_customer_lastname: String,
    x_customer_email: String,
    x_customer_phone: String,
    x_customer_country: String,
    x_customer_city: String,
    x_customer_address: String,
    x_customer_ip: String
})

module.exports = mongoose.model('Epayco', EpaycoSchema)