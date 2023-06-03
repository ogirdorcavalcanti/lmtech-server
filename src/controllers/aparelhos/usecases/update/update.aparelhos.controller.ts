import aparelhoService from "@/services/aparelho.service"
import { Request, Response } from "express"

export class UpdateAparelhoController {
  async handle(request: Request, response: Response) {
    try {
      const { marca, modelo, memoria, hd, placaMae, carregador, bateria } =
        request.body

      if (!marca && !modelo && !placaMae) {
        return response.status(400).send({
          message: "Atualize pelo menos um dos campos para fazer o update!",
        })
      }

      const id = request.params.id

      await aparelhoService.updateService(
        id,
        marca,
        modelo,
        memoria,
        hd,
        placaMae,
        carregador,
        bateria
      )

      return response.send({ message: "Aparelho atualizado com sucesso!" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Aparelho não encontrado" })
    }
  }
}
