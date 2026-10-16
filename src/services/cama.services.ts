import { pool } from "../database/connection.js";
import type { camaResponse } from "../interface/camaInterface.js";

class CamaServices {
     async getAll(){
        try {
            const data = await pool.query("SELECT * FROM camas")
            return data.rows

        } catch (error) {
            console.log("Erro na rota getAll", error)
        }
    }
    async getById(id: string)  {
        try {
            const data = await pool.query<camaResponse>("SELECT * FROM camas WHERE id=$1", [id])
            return data.rows[0]
        } catch (error) {
            console.log("Erro na rota getById", error)
        }
    }
}

export const camaServices = new CamaServices();
