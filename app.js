const express = require("express")
const {NotFoundError, ErrorHandler} = require("./utils/errorHandler.js");
const app = express()

const {loginValidator, registerValidator} = require("./auth.validator.js");
const {checkValidation} = require("./middleware/validator.js");
const {IdValidator} = require("./blog.validator.js");
const {searchValidator} = require("./queryValidator");
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/login', loginValidator(), checkValidation, async (req, res, next) => {

    res.send(req.body)
})
app.post('/register', registerValidator(), checkValidation, async (req, res, next) => {

    res.send(req.body)
})

app.get('/blogs/:id', IdValidator, checkValidation, (req, res, next) => {
    res.send(req.params)
})

app.get('/query', searchValidator(), checkValidation, (req, res, next) => {
    res.send(req.query)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3500, () => {
    console.log('server is running')
})

