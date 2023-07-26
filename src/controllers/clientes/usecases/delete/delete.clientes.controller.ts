import clientesService from "@/services/clientes.service"
import { Request, Response } from "express"

export class deleteClienteController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      await clientesService.deleteService(id)
      response.status(200).send({ message: "cliente deleted successfully" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "cliente wasn't deleted" })
    }
  }
}
