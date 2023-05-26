import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const servicos = await prismaClient.servicos.findUnique({
        where: {
          id: String(id),
        },
      })

      return response.json(servicos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Serviço not found" })
    }
  }
}
