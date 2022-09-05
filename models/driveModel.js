const mongoose = require('mongoose')

const Schema = mongoose.Schema

const driveSchema = new Schema({
    drive_type: {
        type: String,
        required: true
    },
    drive_number: {
        type: String,
        required: true
    },
    receipt_number: {
        type: String,
        required: true
    },
    procurement_number: {
        type: String,
        required: true
    },
    sources_destination: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Drive', driveSchema)