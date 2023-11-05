import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()



// server

const port = process.env.PORT || 3000
app.listen(port, console.log(`app liste to port ${port}...`))