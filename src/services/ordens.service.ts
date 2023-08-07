import { prismaClient } from "@/database/prismaCliente"
import { Prisma } from "@prisma/client"

const createService = async (body: Prisma.OrdensCreateInput) =>
  prismaClient.ordens.create({ data: body })

const getAllService = async () => prismaClient.ordens.findMany()

const getByIdService = async (id: string) =>
  prismaClient.ordens.findUnique({ where: { id } })

const updateService = async (
  id: string,
  Counter: number,
  conclusao: string,
  aparelhosId: string,
  clientesId: string,
  servicosId: string,
  numeroOs: string,
  dataEntrada: string,
  dataPrevista: string,
  dataSaida: string,
  valorFrete: string,
  totalServicos: string,
  totalPecas: string,
  totalOrdem: string,
  observacaoServico: string,
  observacaoInterna: string
) =>
  prismaClient.ordens.update({
    where: { id: id },
    data: {
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

const deleteService = async (id: string) => {
  await prismaClient.ordens.delete({
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
