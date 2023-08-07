import { prismaClient } from "@/database/prismaCliente"
import { Prisma } from "@prisma/client"

const createService = async (body: Prisma.ServicosCreateInput) =>
  prismaClient.servicos.create({ data: body })

const getAllService = async () => prismaClient.servicos.findMany()

const getByIdService = async (id: string) =>
  prismaClient.servicos.findUnique({ where: { id } })

const updateService = async (
  id: string,
  name: string,
  description: string,
  price: string
) =>
  prismaClient.servicos.update({
    where: { id },
    data: { name, description, price },
  })

const deleteService = async (id: string) => {
  await prismaClient.servicos.delete({
    where: { id: id },
  })
}

export = {
  createService,
  getAllService,
  getByIdService,
  updateService,
  deleteService,
}
