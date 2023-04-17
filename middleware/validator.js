const {validationResult} = require("express-validator");

function checkValidation(req, res, next) {
    const error = validationResult(req)
    let obj = {}
    error?.errors?.forEach(err => {
        {
            obj[err.param] = err.msg
        }
    })
    if (Object.keys(obj).length > 0) {
        throw{
            statusCode: 400,
            error: obj
        }
    }
    next()


}

module.exports = {checkValidation}