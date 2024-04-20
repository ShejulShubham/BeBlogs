const express = require('express')
const db = require('../db')
const utils = require('../utils')

//add router
const router = express.Router()

router.post('/search', (request, response) =>{
    const {title} = request.body

    const statement = `select blogid, blogtitle, cattitle, blogdate from blog, category 
    where blog.catid = category.catid having blogtitle = ?;`

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

router.get('/viewall', (request, response)=>{
    
    const query = `select blogtitle, content from blog`

    db.pool.query(query, (error, blogs)=>{

        response.send(utils.createResult(error, blogs))
    })
})


module.exports = router