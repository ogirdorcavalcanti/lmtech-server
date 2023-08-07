import { Request, Response } from "express"
import ordemService from "@/services/ordens.service"

export class deleteOrdemController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      await ordemService.deleteService(id)
      response.status(200).send({ message: "Ordem deleted successfully" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Ordem wasn't deleted" })
    }
  }
}
