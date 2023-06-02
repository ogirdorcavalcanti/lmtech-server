import servicoService from "@/services/servico.service"
import { Request, Response } from "express"

export class GetAllServicosController {
  async handle(request: Request, response: Response) {
    try {
      const servicos = await servicoService.getAllService()

      if (servicos.length === 0) {
        return response
          .status(400)
          .send({ message: "Não há serviços cadastrados" })
      }

      return response.send(servicos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar servicços" })
    }
  }
}
