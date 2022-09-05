const Account = require('../models/accountModel')
const { 
    checkValidity
} = require('../validation/validity.js')
const mongoose = require('mongoose')

// GET all accounts
const getAccounts = async (req, res) => {
    const accounts = await Account.find({}).sort({createdAt: -1})

    res.status(200).json(accounts)
}

// GET a single account
const getAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such account'})
    }

    const account = await Account.findById(id)

    if (!account) {
        return res.status(404).json({error: 'No such account'})
    }

    res.status(200).json(account)
}

// POST a new account
const createAccount = async (req, res) => {

    const emptyFields = checkValidity(req, res)

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the empty fields', emptyFields })
    }

    // ADD doc to db
    try {
        const account = await Account.create(req.body);
        res.status(200).json(account)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// DELETE an account
const deleteAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such account'})
    }

    const account = await Account.findOneAndDelete({_id: id})

    if (!account) {
        return res.status(404).json({error: 'No such account'})
    }

    res.status(200).json(account)
}

// UPDATE an account
const updateAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such account'})
    }

    const account = await Account.findOneAndUpdate({_id: id},
        {
            ...req.body
        })

    if (!account) {
        return res.status(404).json({error: 'No such account'})
    }

    res.status(200).json(account)
}

module.exports = {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
}