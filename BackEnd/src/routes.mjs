import { Router } from "express"; //importa a classe Router que nos proporciona os comportamentos necessário para fazer uma rota etc

import LoginController from "./controllers/LoginController.mjs"; //importa o arquivo de controle que criamos para controlar como a rota se comporta.

const routes = new Router() //instanciando um objeto do tipo Router

routes.get('/login', LoginController.index) //usando o comportamento do Router para criar uma rota, temos dois parâmetros dentro da função get, uma pegando o nome da rota e o outro recebendo nosso controlador citado acima

export default routes;