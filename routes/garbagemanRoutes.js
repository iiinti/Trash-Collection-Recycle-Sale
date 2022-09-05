const express = require('express')
const Drive = require('../models/driveModel')
const {
    createDrive,
    getDrives,
    getDrive,
    deleteDrive,
    updateDrive
} = require('../controllers/driveController')
const Procurement = require('../models/procurementModel')
const {
    getProcurements,
    getProcurement,
    createProcurement,
    deleteProcurement,
    updateProcurement
} = require('../controllers/procurementController')
const Account = require('../models/accountModel')
const {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
} = require('../controllers/accountController')

const router = express.Router()

// DRIVES
// GET all drives
router.get('/drives/', getDrives)

// GET a single drive
router.get('/drive/:id', getDrive)

// POST a new drive
router.post('/drive/', createDrive)

// DELETE a drive
router.delete('/drive/:id', deleteDrive)

// UPDATE a drive
router.patch('/drive/:id', updateDrive)

// PROCUREMENTS
// GET all procurements
router.get('/procurements/', getProcurements)

// GET a single procurement
router.get('/procurement/:id', getProcurement)

// POST a new procurement
router.post('/procurement/', createProcurement)

// DELETE a procurement
router.delete('/procurement/:id', deleteProcurement)

// UPDATE a procurement
router.patch('/procurement/:id', updateProcurement)

// ACCOUNTS
// GET all accounts
router.get('/accounts/', getAccounts)

// GET a single account
router.get('/account/:id', getAccount)

// POST a new account
router.post('/account/', createAccount)

// DELETE a account
router.delete('/account/:id', deleteAccount)

// UPDATE a account
router.patch('/account/:id', updateAccount)

module.exports = router