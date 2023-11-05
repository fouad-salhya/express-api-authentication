import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = express()
dotenv.config()


// middlewares
app.use(express.json())
app.use(bodyParser.json())


// server

const port = process.env.PORT || 3000
app.listen(port, console.log(`app liste to port ${port}...`))