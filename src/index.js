require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mailgun = require('mailgun-js')
const bodyParser = require('body-parser')

//initializing the express application//

const app = express()

//project wide middleware declerations for express//

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

const indexRoute = express.Router()

indexRoute.route('/apis').get((request, response)=>{
return response.json('hello')
})
	.post(request, response) => {
	//this line bellow must be commented out before pwp has been hosted using docker//
	response.append('Access-Control-Allow-Origin', value:['*']);
	console.log(request.body)
	return response.json('is this thing on?')
})
app.use(indexRoute)
app.listen(4200, () => {console.log("the server has started")})


