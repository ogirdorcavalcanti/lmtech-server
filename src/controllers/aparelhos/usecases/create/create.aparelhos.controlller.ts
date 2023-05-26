import { Request, Response } from "express"
import { prismaClient } from "@/database/prismaCliente"

class createAparelhoController {
  async handle(request: Request, response: Response) {
    try {
      const { marca, modelo, memoria, hd, placaMae, carregador, bateria } =
        request.body

      const aparelhos = await prismaClient.aparelhos.create({
        data: {
          marca: marca,
          modelo: modelo,
          memoria: memoria,
          hd: hd,
          placaMae: placaMae,
          carregador: carregador,
          bateria: bateria,
        },
      })

      return response.status(201).json(aparelhos)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createAparelhoController }
