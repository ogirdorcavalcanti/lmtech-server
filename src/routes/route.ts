import { Router } from "express"
import { createClienteController } from "@/controllers/clientes/usecases/create/create.clientes.controller"
import { createAparelhoController } from "@/controllers/aparelhos/usecases/create/create.aparelhos.controlller"
import { createOrdensController } from "@/controllers/ordens/usecases/create/create.ordens.controller"
import { GetClientesController } from "@/controllers/clientes/usecases/get/get.clientes.controller"
import { GetAparelhosController } from "@/controllers/aparelhos/usecases/get/get.aparelhos.controller"
import { GetAllClientesController } from "@/controllers/clientes/usecases/get.all/get.all.clientes.controller"
import { GetAllAparelhosController } from "@/controllers/aparelhos/usecases/get.all/get.all.aparelhos.controler"
import { createServicoController } from "@/controllers/servicos/usecases/create/create.servicos.controller"
import { GetServicoController } from "@/controllers/servicos/usecases/get/get.servicos.controller"
import { GetAllServicosController } from "@/controllers/servicos/usecases/get.all/get.all.servicos.controller"
import { GetOrdensController } from "@/controllers/ordens/usecases/get/get.ordens.controller"
import { GetAllOrdensController } from "@/controllers/ordens/usecases/get.all/get.all.ordens.controller"
import { updateClienteController } from "@/controllers/clientes/usecases/update/update.clientes.controller"
import { UpdateAparelhoController } from "@/controllers/aparelhos/usecases/update/update.aparelhos.controller"
import { updateOrdemController } from "@/controllers/ordens/usecases/update/update.ordem.controller"
import { updateServicoController } from "@/controllers/servicos/usecases/update/update.servico.constroller"

const router = Router()

const createCliente = new createClienteController()
const createAparelho = new createAparelhoController()
const createOrdens = new createOrdensController()
const createServico = new createServicoController()

const getClientes = new GetClientesController()
const getAllClientes = new GetAllClientesController()
const getAparelho = new GetAparelhosController()
const getAllAparelhos = new GetAllAparelhosController()
const getServico = new GetServicoController()
const getAllServicos = new GetAllServicosController()
const getOrdem = new GetOrdensController()
const getAllOrdens = new GetAllOrdensController()

const updateCliente = new updateClienteController()
const updateAparelho = new UpdateAparelhoController()
const updateOrdem = new updateOrdemController()
const updateServico = new updateServicoController()

// POST

router.post("/cliente", createCliente.handle)
router.post("/aparelho", createAparelho.handle)
router.post("/ordens", createOrdens.handle)
router.post("/servico", createServico.handle)

// GET

router.get("/clientes", getAllClientes.handle)
router.get("/cliente/:id", getClientes.handle)

router.get("/aparelhos", getAllAparelhos.handle)
router.get("/aparelho/:id", getAparelho.handle)

router.get("/servicos", getAllServicos.handle)
router.get("/servico/:id", getServico.handle)

router.get("/ordens", getAllOrdens.handle)
router.get("/ordem/:id", getOrdem.handle)

// UPDATE

router.patch("/cliente/:id", updateCliente.handle)
router.patch("/aparelho/:id", updateAparelho.handle)
router.patch("/ordem/:id", updateOrdem.handle)
router.patch("/servico/:id", updateServico.handle)

export { router }
