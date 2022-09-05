const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accountSchema = new Schema({
    account_type: {
        type: String,
        required: true
    },
    contact_info: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    business_info: {
        trade_license: {
            type: String,
            required: true
        },
        nid: {
            type: String,
            required: true
        }
    },
    bank_info: {
        bank_mfs: {
            type: String,
            required: true
        },
        bank_mfs_name: {
            type: String,
            required: true
        },
        branch: {
            type: String,
            required: true
        },
        account_name: {
            type: String,
            required: true
        },
        account_number: {
            type: Number,
            required: true
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Account', accountSchema)