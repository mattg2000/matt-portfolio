require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mailgun = require('mailgun-js')
const bodyParser = require('body-parser')
const {check, validationResult} = require("express-validator")
const Recaptcha = require('express-recaptcha').RecaptchaV2


//initializing the express application//
const app = express()

//project wide middleware declerations for express//
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY)
const indexRoute = express.Router()

const requestValidation = [
	check("email", "A Valid Email is required").isEmail().normalizeEmail(),
	check('name', "A name is required to send an email").not().isEmpty().trim().escape(),
	check('subject').optional().trim().escape(),
	check('message', 'A message is required to send email').not().isEmpty().trim().escape().isLength({max: 2000}),

indexRoute.route('/apis').get((request, response)=>{
return response.json('hello')
})
	.post((request, response) => {
	//this line bellow must be commented out before pwp has been hosted using docker//
	response.append('Access-Control-Allow-Origin', 'value:['*']');
	console.log(request.body)
	return response.json('is this thing on?')
}),
app.use(indexRoute),
app.listen(4200, () => {console.log("the server has started")})]


