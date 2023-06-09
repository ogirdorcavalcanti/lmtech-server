import ordensService from "@/services/ordens.service"
import { Request, Response } from "express"

export class updateOrdemController {
  async handle(request: Request, response: Response) {
    try {
      const { conclusao } = request.body

      if (!conclusao) {
        response.status(400).send({
          message: "Atualize pelo menos um dos campos para fazer update!",
        })
      }

      const id = request.params.id

      await ordensService.updateService(id, conclusao)

      response.send({ message: "Ordem atualizada com sucesso!" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Ordem não encontrada" })
    }
  }
}
