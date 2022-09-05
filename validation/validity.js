//const mongoose = require('mongoose')

function checkValidity (req, res) {


    const requestKeys = Object.keys(req.body)
    const result = Object.keys(requestKeys).map((key) => [Number(key), requestKeys[key]]);


    let emptyFields = []

    for (let index = 0; index < result.length; index++) {
        
        //important, ps. can use the 'in' operator or the hasOwnProperty() method
        //console.log(req.body[result[index][1]])
        //console.log(Object.keys(req.body[result[index][1]]).length)
        
        const associate = result[index][1]
        if(!req.body[associate]) {
            emptyFields.push(associate)
        }
        
    }

    return emptyFields 

}

module.exports = { checkValidity }