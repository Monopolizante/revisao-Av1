import express from 'express'
import { camaRoutes } from './routes/cama.routes.js'
import "dotenv/config"
const app = express()
const port = 3000

app.use(express.json())

app.use("/camas", camaRoutes )

app.listen(port, () => {
    console.log(`Server ligado na porta http://localhost:${port}`)
})
