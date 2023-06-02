import aparelhoService from "@/services/aparelho.service"
import { Request, Response } from "express"

export class GetAllAparelhosController {
  async handle(request: Request, response: Response) {
    try {
      const aparelhos = await aparelhoService.getAllService()

      if (aparelhos.length === 0) {
        return response
          .status(400)
          .send({ message: "Não há aparelhos cadastrados" })
      }

      return response.send(aparelhos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar aparelhos" })
    }
  }
}
