import { prismaClient } from "@/database/prismaCliente"
import { Prisma } from "@prisma/client"

const createService = async (body: Prisma.AparelhosCreateInput) =>
  prismaClient.aparelhos.create({ data: body })

const getAllService = async () => prismaClient.aparelhos.findMany()

const getByIdService = async (id: string) =>
  prismaClient.aparelhos.findUnique({ where: { id } })

const updateService = async (
  id: string,
  marca: string,
  modelo: string,
  memoria: string,
  hd: number,
  placaMae: number,
  carregador: boolean,
  bateria: boolean
) =>
  prismaClient.aparelhos.update({
    where: { id: id },
    data: { marca, modelo, memoria, hd, placaMae, carregador, bateria },
  })

export = {
  createService,
  getAllService,
  getByIdService,
  updateService,
}
