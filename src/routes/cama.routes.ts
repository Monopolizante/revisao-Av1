import { Router,  type Request, type Response } from "express";
import { camaServices } from "../services/cama.services.js";
export const camaRoutes = Router()

camaRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const data  = await camaServices.getAll()
        return res.json(data)
    } catch (error) {
        console.log("Erro no roteamento", error)
    }
})
camaRoutes.get("/:id", async (req: Request<{id: string}>, res: Response) => {
    try{
        const id = req.params.id
        const data = await camaServices.getById(id)
        

        return res.json(data)
    } catch (err){
        console.log(err)
    }
})

