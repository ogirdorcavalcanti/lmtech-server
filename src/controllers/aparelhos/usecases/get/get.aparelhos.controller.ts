import aparelhoService from "@/services/aparelho.service"
import { Request, Response } from "express"
import validate from "uuid-validate"

export class GetAparelhosController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (!validate(id)) {
        throw new Error("ID inválido")
      }

      const aparelhos = await aparelhoService.getByIdService(id)

      if (!aparelhos) {
        return response
          .status(400)
          .send({ message: "aparelho não encontrado!" })
      }

      return response.send(aparelhos)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Aparelho não encontrado" })
    }
  }
}
