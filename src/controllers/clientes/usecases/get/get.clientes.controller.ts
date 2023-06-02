import clientesService from "@/services/clientes.service"
import { Request, Response } from "express"

export class GetClientesController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (id === undefined) {
        throw new Error("ID não fornecido")
      }

      const clientes = await clientesService.getByIdService(id)

      if (!clientes) {
        return response
          .status(400)
          .send({ message: "clientes não encontrado!" })
      }

      return response.send(clientes)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Clientes não encontrados" })
    }
  }
}
