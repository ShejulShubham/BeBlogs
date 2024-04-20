const express = require('express')
const db = require('../db')
const utils = require('../utils')


const router = express.Router()


router.post('/add', (request, response)=>{
    const {cattitle, description} = request.body

    const statement = `insert into category (cattitle, description) values (?, ?)`

    db.pool.execute(statement, [cattitle, description], (error, result)=>{
        response.send(utils.createResult(error, result))
    })
})

router.get('/viewall', (request, response)=>{


    const statement = `select catid, cattitle, description from category`

    db.pool.execute(statement, (error, result)=>{
        response.send(utils.createResult(error, result))
    })
})


module.exports = router