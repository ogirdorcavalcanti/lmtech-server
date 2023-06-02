import { Request, Response } from "express"
import ordensService from "@/services/ordens.service"

class createOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const { conclusao } = request.body

      if (!conclusao) {
        response
          .status(400)
          .send({ message: "Por Favor, preencha o campo obrigatório!" })
      }

      const orden = await ordensService.createService(request.body)

      if (!orden) {
        return response.status(400).send({ message: "Erro ao criar a orden!" })
      }

      response.status(201).send({
        orden: {
          id: orden.id,
          conclusao,
        },
      })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createOrdensController }
