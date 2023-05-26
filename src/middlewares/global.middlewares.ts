// import { prismaClient } from "@/database/prismaCliente"
// import { PrismaClient, Prisma } from "@prisma/client"
// import { NextFunction, Request, Response } from "express"

// class validId {
//   async handle(request: Request, response: Response, next: NextFunction) {
//     const { id } = request.params

//     const cliente = await prismaClient.clientes.findUnique({
//       where: {
//         id: String(id),
//       },
//     })

//     if (cliente?.id === id) {
//       return response.status(400).send({ message: "invalid ID" })
//     }

//     return next()
//   }
// }

// class validUser {
//   async handle(request: Request, response: Response, next: NextFunction) {
//     const { id } = request.params

//     const user = await prismaClient.CL

//   }
// }

// export { validId, validUser }
