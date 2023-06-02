import clientesService from "@/services/clientes.service"
import { Request, Response } from "express"

export class updateClienteController {
  async handle(request: Request, response: Response) {
    try {
      const { nome, sobreNome, email, cel, observacao } = request.body

      if (!nome && !sobreNome && !email && !cel && observacao) {
        response.status(400).send({
          message: "Atualize pelo menos um dos campos para fazer update!",
        })
      }

      const id = request.params.id

      if (id === undefined) {
        throw new Error("ID não fornecido")
      }

      const cliente = await clientesService.getByIdService(id)

      if (!cliente) {
        return response.status(400).send({ message: "cliente não encontrado!" })
      }

      await clientesService.updateService(
        id,
        nome,
        sobreNome,
        email,
        cel,
        observacao
      )

      response.send({ message: "cliente atualizado com sucesso!" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Cliente não encontrados" })
    }
  }
}
