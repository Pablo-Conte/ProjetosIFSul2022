class RegisterController {
    async index(req, res){
        return res.json({Register: "Registro"})
    }
}

export default new RegisterController;