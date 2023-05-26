import { Request, Response } from "express"
import { prismaClient } from "@/database/prismaCliente"

class createServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, price } = request.body

      const servico = await prismaClient.servicos.create({
        data: {
          name,
          description,
          price,
        },
      })

      return response.status(201).json(servico)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createServicoController }
