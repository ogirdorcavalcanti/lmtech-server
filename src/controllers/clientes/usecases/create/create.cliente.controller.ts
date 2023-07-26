import clientesService from "@/services/clientes.service"
import { Request, Response } from "express"

class createClienteController {
  async handle(request: Request, response: Response) {
    try {
      const { nome, sobreNome, email, cel, observacao } = request.body

      if (!nome || !sobreNome || !email || !cel) {
        response
          .status(400)
          .send({ message: "Por Favor, preencha os campos obrigatórios!" })
      }

      const cliente = await clientesService.createService(request.body)

      if (!cliente) {
        return response
          .status(400)
          .send({ message: "Erro ao criar o cliente!" })
      }

      response.status(201).send({
        cliente: {
          id: cliente.id,
          nome,
          sobreNome,
          email,
          cel,
          observacao,
        },
      })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createClienteController }
