const {body} = require("express-validator");
const loginValidator = () => [
    body('email').isEmail().withMessage("ایمیل نامعتبر است"),
    body('password').isLength({min: 6, max: 20}).withMessage("رمز ارسال شده نامعتبر است")
]
const registerValidator = () => [
    body('fullname').isLength({min: 3, max: 30}).withMessage("نام کامل باید بین 3 تا 30 کارکتر باشد"),

    body('age').custom(value => {
        if (isNaN(value)) {
            throw new Error("سن باید یک عدد باشد")
        } else if (+value > 90 || +value < 10) {
            throw new Error("شما مجاز ثبت نام ندارید")
        }
        return true
    }),

    body('mobile').isMobilePhone(['fa-IR', "en-US"]).withMessage("شماره همراه رادرست وارد کنید"),
    body('email').isEmail().withMessage("لطفا یک ایمیل معتبر وارد کنید"),
    body('password').isLength({min: 6, max: 20}).withMessage("رمز ارسال شده نامعتبر است"),
    body('confirmPassword').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('تکرار پسورد برابری ندارد')
        }
        return true
    })
]


module.exports = {loginValidator, registerValidator}