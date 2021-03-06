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

    async updateStatus(request: any, response: Response): Promise<any> {
        const { bookId, newStatus } = request.body
      const result = await prisma.book.update({
          where: {
              id: bookId
          },
          data: {
              status: newStatus
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
            await prisma.book.delete({
                where: {
                    id: bookId,
                },
            })
        const result = await prisma.book.findMany()
        return response.json(result)
        } else return response.json("Oops.. Something happened :( ! Try later!")
    },
}