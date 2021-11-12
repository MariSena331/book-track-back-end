import { prisma } from './main'
import express, { RequestHandler } from 'express'
import bodyParser from 'body-parser'
import { router } from './routes'

const app = express()
const jsonParser = bodyParser.json()
const cors = require('cors')

try {
    app.use(cors)
    app.use(jsonParser)
    app.use(router)
 
    app.listen(3333)
    console.log("Server is running at port 3333!")
} catch (err) {
 console.log(err)
}
