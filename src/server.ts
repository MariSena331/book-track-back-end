import express from 'express'

const app = express()

try {
 app.listen(3333)
 console.log("Server is running at port 3333!")
} catch (err) {
 console.log(err)
}
