const Drive = require('../models/driveModel')
const { 
    checkValidity
} = require('../validation/validity.js')
const mongoose = require('mongoose')

// GET all drives
const getDrives = async (req, res) => {
    const drives = await Drive.find({}).sort({createdAt: -1})

    res.status(200).json(drives)
}

// GET a single drive
const getDrive = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such drive'})
    }

    const drive = await Drive.findById(id)

    if (!drive) {
        return res.status(404).json({error: 'No such drive'})
    }

    res.status(200).json(drive)
}

// POST a new drive
const createDrive = async (req, res) => {
    
    const emptyFields = checkValidity(req, res)

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the empty fields', emptyFields })
    }

    // ADD doc to db
    try {
        const {drive_type, drive_number, receipt_number, procurement_number, sources_destination} = req.body
        const drive = await Drive.create({drive_type, drive_number, receipt_number, procurement_number, sources_destination})
        res.status(200).json(drive)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


// DELETE a drive
const deleteDrive = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such drive'})
    }

    const drive = await Drive.findOneAndDelete({_id: id})

    if (!drive) {
        return res.status(404).json({error: 'No such drive'})
    }

    res.status(200).json(drive)
}

// UPDATE a drive
const updateDrive = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such drive'})
    }

    const drive = await Drive.findOneAndUpdate({_id: id},
        {
            ...req.body
        })

    if (!drive) {
        return res.status(404).json({error: 'No such drive'})
    }

    res.status(200).json(drive)
}

module.exports = {
    createDrive,
    getDrives,
    getDrive,
    deleteDrive,
    updateDrive
}