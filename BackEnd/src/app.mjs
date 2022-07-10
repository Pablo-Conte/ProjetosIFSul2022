import express, {Router} from "express";
import cors from "cors";
import routes from './routes.mjs'
import "./database/index.mjs";

class App {
    constructor(){ //Estamos aqui setando o construtor da classe app
        this.server = express() //que vai chamar seus próprios comportamentos
        this.middlewares();      
        this.routes();           
    }

    middlewares(){//Os middlewares são funções a serem executadas até chegar chegar em nossas rotas
        this.server.use(express.json()); //setando o que nosso server vai receber
        this.server.use(cors()) //pré configurações de origens de requisições
    }

    routes(){
        this.server.use(routes)
    }

}

export default new App().server