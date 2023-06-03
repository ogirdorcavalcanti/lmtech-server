import servicoService from "@/services/servico.service"
import { Request, Response } from "express"
import validate from "uuid-validate"

export class GetServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (!validate(id)) {
        throw new Error("ID inválido")
      }

      const servico = await servicoService.getByIdService(id)

      if (!servico) {
        return response.status(400).send({ message: "serviço não encontrada!" })
      }

      return response.send(servico)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Serviço não encontrado" })
    }
  }
}
