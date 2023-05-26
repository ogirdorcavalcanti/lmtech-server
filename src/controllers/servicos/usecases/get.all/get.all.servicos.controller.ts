import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetAllServicosController {
  async handle(request: Request, response: Response) {
    try {
      const servicos = await prismaClient.servicos.findMany()

      return response.status(200).send(servicos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar servicços" })
    }
  }
}
