const express = require('express')
const db = require('../db')
const utils = require('../utils')

//add router
const router = express.Router()

router.post('/search', (request, response) =>{
    const {title} = request.body

    const statement = `select blogid ,blogtitle, cattitle, content, blodgdate form blog where blogtile = ?`

    db.pool.query(statement, [title], (error, blog)=>{
        response.send(utils.createResult(error, blog))
    })
    
})


// router.post('/create', (request, response) =>{
//     const {}
// })

router.post('/view', (request, response)=>{
    
    const query = `select blodid, blogtitle, cattitle, blogdate from blog`

    db.pool.query(query, (error, blogs)=>{
        response.send(utils.createResult(error, blogs))
    })
})

router.post('/category', (request, response)=>{
    const {cattitle, description} = request.body

    const statement = `insert into category (cattitle, description) values (?, ?)`

    db.pool.execute(statement, [cattitle, description], (error, result)=>{
        response.send(utils.createResult(error, result))
    })
})


module.exports = router