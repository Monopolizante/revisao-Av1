import "dotenv/config"
import {Pool} from "pg"


export const pool = new Pool()


pool.on("error", (err, client) =>{
    console.log("Erro na conexão do banco", err)
    process.exit(1)
})


