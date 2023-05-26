import { Request, Response } from "express"
import { prismaClient } from "@/database/prismaCliente"

class createClienteController {
  async handle(request: Request, response: Response) {
    try {
      const { nome, sobreNome, email, cel } = request.body

      const clientes = await prismaClient.clientes.create({
        data: {
          nome,
          sobreNome,
          email,
          cel,
        },
      })

      return response.status(201).send(clientes)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createClienteController }
