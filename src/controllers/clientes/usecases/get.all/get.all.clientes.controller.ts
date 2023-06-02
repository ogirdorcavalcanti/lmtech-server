import clientesService from "@/services/clientes.service"
import { Request, Response } from "express"

export class GetAllClientesController {
  async handle(request: Request, response: Response) {
    try {
      const clientes = await clientesService.getAllService()

      if (clientes.length === 0) {
        return response
          .status(400)
          .send({ message: "Não há clientes cadastrados" })
      }

      return response.send(clientes)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar clientes" })
    }
  }
}
