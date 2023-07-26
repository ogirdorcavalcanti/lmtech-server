import { prismaClient } from "@/database/prismaCliente"
import { Prisma } from "@prisma/client"

const createService = async (body: Prisma.ClientesCreateInput) =>
  prismaClient.clientes.create({ data: body })

const getAllService = async () => prismaClient.clientes.findMany()

const getByIdService = async (id: string) =>
  prismaClient.clientes.findUnique({ where: { id } })

const updateService = async (
  id: string,
  nome: string,
  sobreNome: string,
  email: string,
  cel: string,
  observacao: string
) =>
  prismaClient.clientes.update({
    where: { id: id },
    data: { nome, sobreNome, email, cel, observacao },
  })

const deleteService = async (id: string) => {
  await prismaClient.clientes.delete({
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
