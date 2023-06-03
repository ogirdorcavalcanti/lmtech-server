import ordensService from "@/services/ordens.service"
import { Request, Response } from "express"

export class GetOrdensController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      const ordem = await ordensService.getByIdService(id)

      return response.send(ordem)
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Orden não encontrada!" })
    }
  }
}
