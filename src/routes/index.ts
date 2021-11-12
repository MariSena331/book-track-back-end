import { Router, Request, Response} from 'express'
import { booksRoutes } from './BooksRoutes'
import * as core from 'express-serve-static-core'

const router = Router()

router.use("/books", booksRoutes)

export { router }