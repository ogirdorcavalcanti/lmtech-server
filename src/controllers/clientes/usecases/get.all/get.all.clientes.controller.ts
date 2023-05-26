import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetAllClientesController {
  async handle(request: Request, response: Response) {
    try {
      const clientes = await prismaClient.clientes.findMany()

      return response.status(200).send(clientes)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar clientes" })
    }
  }
}
