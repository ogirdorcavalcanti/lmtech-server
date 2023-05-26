import { prismaClient } from "@/database/prismaCliente"
import { Request, Response } from "express"

export class GetClientesController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (id === undefined) {
        throw new Error("ID não fornecido")
      }

      const clientes = await prismaClient.clientes.findUnique({
        where: {
          id: String(id),
        },
      })
      return response.json(clientes)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Clientes não encontrados" })
    }
  }
}
