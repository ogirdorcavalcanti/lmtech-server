import ordensService from "@/services/ordens.service"
import { Request, Response } from "express"

export class GetAllOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const ordens = await ordensService.getAllService()

      if (ordens.length === 0) {
        return response
          .status(400)
          .send({ message: "Não há ordens cadastrados" })
      }

      return response.send(ordens)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Erro ao buscar as ordens" })
    }
  }
}
