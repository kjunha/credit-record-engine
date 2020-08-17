const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection)
const Schema = mongoose.Schema
let walletSchema = new Schema({
    created: {type:Date, default:Date.now},
    index: Number,
    name: {type: String, required: true},
    subtotal: {type: Number, required: true}
})

walletSchema.plugin(autoIncrement.plugin, {
    model: 'Wallet',
    field: 'index',
    startAt: 1,
    increment: 1
})

const Wallet = mongoose.model('Wallet', walletSchema, 'wallets')
module.exports = Wallet