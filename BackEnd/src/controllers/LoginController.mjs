class LoginController {
    async index(req, res){
        return res.json({login: "Tela de Login da aplicação"})
    }
}

export default new LoginController;

//Essa classe que criamos serve para ser importada no arquivo routes, que gera as rotas do nosso site, por aqui conseguimos controlar cada rota de forma intima, usando o comportamento assincrono index()...