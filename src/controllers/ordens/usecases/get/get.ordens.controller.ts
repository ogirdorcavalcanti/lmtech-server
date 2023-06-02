import ordensService from "@/services/ordens.service"
import { Request, Response } from "express"

export class GetOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (id === undefined) {
        throw new Error("ID não fornecido")
      }

      const ordem = await ordensService.getByIdService(id)

      if (!ordem) {
        return response.status(400).send({ message: "ordem não encontrada!" })
      }

      return response.send(ordem)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Orden não encontrada!" })
    }
  }
}
