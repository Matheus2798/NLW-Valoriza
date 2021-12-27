import "reflect-metadata";
import * as express from "express";
import "express-async-errors";
import { Request, Response, NextFunction } from "express";
import routes from "./routes";


const app = express();

app.use(express.json());
app.use(routes);

//Middlewares podem ser usados para tratar erros, verificando as requests.
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ err: err.message })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

})
app.listen(3333, () => { 
    console.log("Server open http://localhost:3333"); 
});