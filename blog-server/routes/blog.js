const express = require('express')
const db = require('../db')
const utils = require('../utils')

//add router
const router = express.Router()

router.post('/search', (request, response) =>{
    const {title} = request.body

    const statement = `select blogid, blogtitle, content, blogdate from blog where blogtitle = ?;`

    db.pool.query(statement, [title], (error, blog)=>{
        response.send(utils.createResult(error, blog))
    })
    
})


router.post('/create', (request, response) =>{
    const {blogtitle, content, catid, userid} = request.body

    const statement = `insert into blog (blogtitle, content, catid, userid) values (?, ?, ?, ?);`

    db.pool.execute(statement, [blogtitle, content, catid, userid], (error, result)=>{
        response.send(utils.createResult(error, result))
    })
})

router.get('/view', (request, response)=>{
    
    const query = `select * from blog`

    db.pool.query(query, (error, blogs)=>{
        response.send(utils.createResult(error, blogs))
    })
})


// router.post('/category', (request, response)=>{
//     const {cattitle, description} = request.body

//     const statement = `insert into category (cattitle, description) values (?, ?)`

//     db.pool.execute(statement, [cattitle, description], (error, result)=>{
//         response.send(utils.createResult(error, result))
//     })
// })


module.exports = router