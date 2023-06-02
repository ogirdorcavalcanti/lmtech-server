import { prismaClient } from "@/database/prismaCliente"
import { Prisma } from "@prisma/client"

const createService = async (body: Prisma.OrdensCreateInput) =>
  prismaClient.ordens.create({ data: body })

const getAllService = async () => prismaClient.ordens.findMany()

const getByIdService = async (id: string) =>
  prismaClient.ordens.findUnique({ where: { id } })

const updateService = async (id: string, conclusao: string) =>
  prismaClient.ordens.update({ where: { id: id }, data: { conclusao } })

export = {
  createService,
  getAllService,
  getByIdService,
  updateService,
}
