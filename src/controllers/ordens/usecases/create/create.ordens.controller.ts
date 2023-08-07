import ordensService from "@/services/ordens.service"
import { Request, Response } from "express"

class createOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const {
        Counter,
        conclusao,
        aparelhosId,
        clientesId,
        servicosId,
        numeroOs,
        dataEntrada,
        dataPrevista,
        dataSaida,
        valorFrete,
        totalServicos,
        totalPecas,
        totalOrdem,
        observacaoServico,
        observacaoInterna,
      } = request.body

      if (!conclusao || !aparelhosId || !clientesId || !servicosId) {
        response
          .status(400)
          .send({ message: "Por Favor, preencha o campo obrigatório!" })
      }

      const ordens = await ordensService.createService(request.body)

      if (!ordens) {
        return response.status(400).send({ message: "Erro ao criar a orden!" })
      }

      response.status(201).send({
        orden: {
          id: ordens.id,
          Counter,
          conclusao,
          aparelhosId,
          clientesId,
          servicosId,
          numeroOs,
          dataEntrada,
          dataPrevista,
          dataSaida,
          valorFrete,
          totalServicos,
          totalPecas,
          totalOrdem,
          observacaoServico,
          observacaoInterna,
        },
      })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}

export { createOrdensController }
