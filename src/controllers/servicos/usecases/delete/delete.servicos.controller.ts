import { Request, Response } from "express"
import servicoService from "@/services/servico.service"

export class deleteServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      await servicoService.deleteService(id)
      response.status(200).send({ message: "cliente deleted successfully" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "cliente wasn't deleted" })
    }
  }
}
