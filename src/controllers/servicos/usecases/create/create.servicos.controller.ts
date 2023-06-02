import { Request, Response } from "express"
import servicoService from "@/services/servico.service"

class createServicoController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, price } = request.body

      if (!name || !description || !price) {
        response
          .status(400)
          .send({ message: "Por Favor, preencha os campos obrigatórios!" })
      }

      const servico = await servicoService.createService(request.body)

      if (!servico) {
        return response
          .status(400)
          .send({ message: "Erro ao criar o serviço!" })
      }

      response.status(201).send({
        cliente: {
          id: servico.id,
          name,
          description,
          price,
        },
      })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createServicoController }
