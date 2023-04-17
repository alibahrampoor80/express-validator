const {query} = require("express-validator");
const searchValidator = () => [
    query('title').isEmpty().isString().matches(/[a-z0-9]*/gim).withMessage(''),
    query('sort').matches(/ASC|DESC/).withMessage('')
]
module.exports = {searchValidator}