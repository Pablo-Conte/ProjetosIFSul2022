class HomeController {
    async index(req, res){
        return res.json({Home: "Home"})
    }
}

export default new HomeController;