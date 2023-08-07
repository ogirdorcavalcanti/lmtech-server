import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import aparelhoService from "@/services/aparelho.service"
import clientesService from "@/services/clientes.service"
import servicoService from "@/services/servico.service"
import ordensService from "@/services/ordens.service"

const validIdAparelho = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient()

  const { id } = request.params

  const record = await prisma.aparelhos.findUnique({
    where: { id },
  })

  if (!record) {
    // O ID não corresponde a nenhum registro existente
    console.log("ID inválido")
    // Faça o tratamento adequado, como retornar um erro ou uma resposta de erro
  }

  next()
}

const validAparelho = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params

  const aparelho = await aparelhoService.getByIdService(id)

  if (!aparelho) {
    return response.status(400).send({ message: "aparelhos não encontrado!" })
  }

  next()
}

const validIdCliente = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient()

  const { id } = request.params

  const clientesId = await prisma.clientes.findUnique({
    where: { id },
  })

  if (!clientesId) {
    // O ID não corresponde a nenhum registro existente
    console.log("ID inválido")
    // Faça o tratamento adequado, como retornar um erro ou uma resposta de erro
  }

  next()
}

const validCliente = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params

  const clientes = await clientesService.getByIdService(id)

  if (!clientes) {
    return response.status(400).send({ message: "cliente não encontrado!" })
  }

  next()
}

const validIdSevicos = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient()

  const { id } = request.params

  const clientesId = await prisma.servicos.findUnique({
    where: { id },
  })

  if (!clientesId) {
    // O ID não corresponde a nenhum registro existente
    console.log("ID inválido")
    // Faça o tratamento adequado, como retornar um erro ou uma resposta de erro
  }

  next()
}

const validServico = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params

  const servico = await servicoService.getByIdService(id)

  if (!servico) {
    return response.status(400).send({ message: "servico não encontrado!" })
  }

  next()
}

const validIdOrdens = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient()

  const { id } = request.params

  const clientesId = await prisma.ordens.findUnique({
    where: { id },
  })

  if (!clientesId) {
    // O ID não corresponde a nenhum registro existente
    console.log("ID inválido")
    // Faça o tratamento adequado, como retornar um erro ou uma resposta de erro
  }

  next()
}

const validOrdens = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params

  const ordem = await ordensService.getByIdService(id)

  if (!ordem) {
    return response.status(400).send({ message: "servico não encontrado!" })
  }

  next()
}

export {
  validIdAparelho,
  validAparelho,
  validIdCliente,
  validIdSevicos,
  validIdOrdens,
  validCliente,
  validServico,
  validOrdens,
}
