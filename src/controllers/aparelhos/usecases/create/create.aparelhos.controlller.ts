import { Request, Response } from "express"
import aparelhoService from "@/services/aparelho.service"

class createAparelhoController {
  async handle(request: Request, response: Response) {
    try {
      const { marca, modelo, memoria, hd, placaMae, carregador, bateria } =
        request.body

      if (!marca || !modelo || !placaMae) {
        response
          .status(400)
          .send({ message: "Por Favor, preencha os campos obrigatórios!" })
      }

      const aparelho = await aparelhoService.createService(request.body)

      if (!aparelho) {
        return response
          .status(400)
          .send({ message: "Erro ao criar o aparelho!" })
      }

      response.status(201).send({
        aparelho: {
          id: aparelho.id,
          marca,
          memoria,
          hd,
          placaMae,
          carregador,
          bateria,
        },
      })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createAparelhoController }
