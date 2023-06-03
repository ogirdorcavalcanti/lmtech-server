import servicoService from "@/services/servico.service"
import { Request, Response } from "express"

export class GetServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const servico = await servicoService.getByIdService(id)

      return response.send(servico)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Serviço não encontrado" })
    }
  }
}
