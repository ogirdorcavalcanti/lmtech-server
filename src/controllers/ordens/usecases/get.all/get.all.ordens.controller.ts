import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetAllOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const ordens = await prismaClient.ordens.findMany()

      return response.status(200).send(ordens)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar as ordens" })
    }
  }
}
