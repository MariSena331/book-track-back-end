import { Response } from "express"
import { prisma } from "../main"

export const BooksController = {
    async create(request: any, response: Response): Promise<any> {
        const { title, status, author, score } = request.body
        const result = await prisma.book.create({
           data: {
            title,
            status,
            author,
            score,
            concludedAt: new Date()
           }
        })
        return response.json(result)
    },
    
    async getAll(request: any, response: Response): Promise<any> {
        const result = await prisma.book.findMany()

        return response.json(result)
    },

    async remove(request: any, response: Response): Promise<any> {
        const { bookId } = request.body

        if(bookId) {
            const result = await prisma.book.delete({
                where: {
                    id: bookId,
                },
            })
        return response.json("Book removed with success!")
        } else return response.json("Oops.. Something happened :( ! Try later!")
    },
}