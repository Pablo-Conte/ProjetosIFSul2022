import dataBase from "../database/index.mjs";

const db = dataBase.connection;

class LoginController {
    async login(req, res){
        const email = req.body.email;
        const password = req.body.password;
        db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], (err, result) => {
            if (err){
                res.send(err);
            }
            if (result.length > 0){
                res.send({msg: "Usuário Logado com sucesso"})
            } else {
                res.send({msg: "Conta não encontrada"})
            }
        })
    }


}

export default new LoginController;

//Essa classe que criamos serve para ser importada no arquivo routes, que gera as rotas do nosso site, por aqui conseguimos controlar cada rota de forma intima, usando o comportamento assincrono index()...