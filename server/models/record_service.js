const mongoose = require('mongoose')
const Schema = mongoose.Schema
let recordSchema = new Schema({
    created: {type:Date, default:Date.now},
    description: {type: String, required: true},
    amount: {type: Number, required: true}
})

recordSchema.statics.findAll = () => {
    return this.find({})
}

const Record = mongoose.model('Record', recordSchema, 'records')
module.exports = Record