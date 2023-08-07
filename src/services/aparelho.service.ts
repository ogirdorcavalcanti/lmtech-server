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
  hd: string,
  placaMae: string,
  carregador: boolean,
  bateria: boolean,
  caracteristicas: string,
  equipamento: string,
  problema: string,
  numerodeSerie: string,
  observacaoRecebimento: string
) =>
  prismaClient.aparelhos.update({
    where: { id: id },
    data: {
      marca,
      modelo,
      memoria,
      hd,
      placaMae,
      carregador,
      bateria,
      caracteristicas,
      equipamento,
      problema,
      numerodeSerie,
      observacaoRecebimento,
    },
  })

const deleteService = async (id: string) => {
  await prismaClient.aparelhos.delete({
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
