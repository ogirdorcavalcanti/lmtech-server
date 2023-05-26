import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const ordens = await prismaClient.ordens.findUnique({
        where: {
          id: String(id),
        },
      })

      return response.json(ordens)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Orden not found" })
    }
  }
}
