//const mongoose = require('mongoose')

function checkValidity (req, res) {


    const requestKeys = Object.keys(req.body)
    const result = Object.keys(requestKeys).map((key) => [Number(key), requestKeys[key]]);

    console.log(result)
    //const associate = result[2][1]
    //return console.log(associate)
    //return console.log(req.body[associate])

    let emptyFields = []

    for (let index = 0; index < result.length; index++) {
        
        const associate = result[index][1]
        if(!req.body[associate]) {
            emptyFields.push(associate)
        }
        
    }

    //let allFields = []

    //array.forEach(element => {
        
    //});

    //return console.log(requestKeys[0])
    //return console.log(Object.keys(req.body).length)
    //return console.log(Object.values(req.body).length)
    //const requestBody = req.body
    //return console.log(requestBody[0])

    /* const {drive_type, drive_number, receipt_number, procurement_number, sources_destination} = req.body

    let emptyFields = []

    if(!drive_type) {
        emptyFields.push('drive_type')
    }
    if(!drive_number) {
        emptyFields.push('drive_number')
    }
    if(!receipt_number) {
        emptyFields.push('receipt_number')
    }
    if(!procurement_number) {
        emptyFields.push('procurement_number')
    }
    if(!sources_destination) {
        emptyFields.push('sources_destination')
    }*/
    console.log(emptyFields)
    return emptyFields 

}

module.exports = { checkValidity }