const express = require('express')
const db = require('../db')
const utils = require('../utils')

//add router
const router = express.Router()

router.post('/register', (request, response) =>{

    const {name, email, password, phone} = request.body
    
    const statement = `insert into user (name, email, password, phone) values (?,?,?,?);`

    db.pool.execute(
        statement, 
        [name, email, password, phone], 
        (error, result) =>{
            response.send(utils.createResult(error, result))
    })
})


router.post('/login', (request, response) =>{
    const {email, password} = request.body
    
    const statement = `select userid, name, email, password, phone from user where email = ? and password = ?`

    db.pool.query(statement, [email, password], (error, users)=>{
        if(error){
            response.send(utils.createErrorResult(error))
        }else{
            if(users.length == 0){
                response.send(utils.createErrorResult('user does not exist'))
            }else{
                const user = users[0]
                response.send(utils.createSuccessResult(user))
            }
            
        }

    })
})


module.exports = router