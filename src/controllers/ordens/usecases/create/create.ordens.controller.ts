import { Request, Response } from "express"
import { prismaClient } from "@/database/prismaCliente"

class createOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const { conclusao } = request.body

      const ordens = await prismaClient.ordens.create({
        data: {
          conclusao: conclusao,
        },
      })

      return response.status(201).json(ordens)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createOrdensController }
