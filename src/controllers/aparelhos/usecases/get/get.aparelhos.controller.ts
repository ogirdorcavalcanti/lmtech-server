import aparelhoService from "@/services/aparelho.service"
import { Request, Response } from "express"

export class GetAparelhosController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const aparelhos = await aparelhoService.getByIdService(id)

      return response.send(aparelhos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Aparelho não encontrado" })
    }
  }
}
