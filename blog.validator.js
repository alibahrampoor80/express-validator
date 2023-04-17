const {param} = require("express-validator");

const IdValidator = param("id").isMongoId().withMessage("شناسه نامعتبر است.")

module.exports = {IdValidator}