import aparelhoService from "@/services/aparelho.service"
import { Request, Response } from "express"

export class deleteAparelhoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params

      // const device = await aparelhoService.getByIdService(id)

      // if (!device) {
      //   return response.status(404).send({ message: "device not found!" })
      // }

      await aparelhoService.deleteService(id)

      response.status(200).send({ message: "Device deleted successfully" })
    } catch (error) {
      console.log(error)
      return response.status(404).send({ error: "Device wasn't deleted" })
    }
  }
}
