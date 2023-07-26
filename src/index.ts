import express from "express"
import { router } from "./routes/route"
import dotenv from "dotenv"
import cors from "cors"

const PORT = process.env.PORT || 6000
const app = express()

// CONFIGURATION
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`))
