import servicoService from "@/services/servico.service"
import { Request, Response } from "express"
import validate from "uuid-validate"

export class updateServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, price } = request.body

      if (!name && !description && !price) {
        response.status(400).send({
          message: "Atualize pelo menos um dos campos para fazer update!",
        })
      }

      const id = request.params.id

      if (!validate(id)) {
        throw new Error("ID inválido")
      }

      const servico = await servicoService.getByIdService(id)

      if (!servico) {
        return response
          .status(400)
          .send({ message: "Id do Serviço não encontrado!" })
      }

      await servicoService.updateService(id, name, description, price)

      response.send({ message: "Serviço atualizado com sucesso!" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Ordem não encontrada" })
    }
  }
}
