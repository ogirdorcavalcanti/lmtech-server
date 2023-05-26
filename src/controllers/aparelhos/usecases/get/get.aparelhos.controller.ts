import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetAparelhosController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const aparelhos = await prismaClient.aparelhos.findUnique({
        where: {
          id: String(id),
        },
      })

      return response.json(aparelhos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Aparelho not found" })
    }
  }
}
