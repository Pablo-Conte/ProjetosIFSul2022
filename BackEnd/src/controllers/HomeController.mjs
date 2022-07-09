class HomeController {
    async index(req, res){
        return res.json({Home: "Você está na home do projeto"})
    }
}

export default new HomeController;