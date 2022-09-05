const Procurement = require('../models/procurementModel')
const { 
    checkValidity
} = require('../validation/validity.js')
const mongoose = require('mongoose')

// GET all procurements
const getProcurements = async (req, res) => {
    const procurements = await Procurement.find({}).sort({createdAt: -1})

    res.status(200).json(procurements)
}

// GET a single procurement
const getProcurement = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such procurement'})
    }

    const procurement = await Procurement.findById(id)

    if (!procurement) {
        return res.status(404).json({error: 'No such procurement'})
    }

    res.status(200).json(procurement)
}

// POST a new procurement
const createProcurement = async (req, res) => {

    const emptyFields = checkValidity(req, res)

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the empty fields', emptyFields })
    }

    // ADD doc to db
    try {
        const procurement = await Procurement.create(req.body);
        res.status(200).json(procurement)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


// DELETE a procurement
const deleteProcurement = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such procurement'})
    }

    const procurement = await Procurement.findOneAndDelete({_id: id})

    if (!procurement) {
        return res.status(404).json({error: 'No such procurement'})
    }

    res.status(200).json(procurement)
}


// UPDATE a procurement
const updateProcurement = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such procurement'})
    }

    const procurement = await Procurement.findOneAndUpdate({_id: id},
        {
            ...req.body
        })

    if (!procurement) {
        return res.status(404).json({error: 'No such procurement'})
    }

    res.status(200).json(procurement)
}


module.exports = {
    getProcurements,
    getProcurement,
    createProcurement,
    deleteProcurement,
    updateProcurement
}