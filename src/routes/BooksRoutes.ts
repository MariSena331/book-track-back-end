import { Router, Request, Response } from 'express'
import * as core from 'express-serve-static-core'
import { BooksController } from '../controllers/BooksController'

const booksRoutes = Router()

booksRoutes.post("/", (request: Request, response: Response) => {
    return BooksController.create(request, response)
})

booksRoutes.get("/", (request: Request, response: Response) => {
    return BooksController.getAll(request, response)
})

export { booksRoutes }