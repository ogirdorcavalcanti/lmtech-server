import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetAllAparelhosController {
  async handle(request: Request, response: Response) {
    try {
      const aparelhos = await prismaClient.aparelhos.findMany()

      return response.status(200).send(aparelhos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar aparelhos" })
    }
  }
}
