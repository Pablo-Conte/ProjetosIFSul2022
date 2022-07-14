import dataBase from "../database/index.mjs";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const saltRounds = 10

const db = dataBase.connection;

class LoginController {
    async login(req, res){
        const email = req.body.email;
        const password = req.body.password;
        db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
            if (err){
                res.send(err);
            }
            if (result.length > 0){
                bcrypt.compare(password, result[0].password, (err, result) => {
                    if (result){
                        res.send({msg: "Usuário logado com sucesso"})
                    } else {
                        res.send({msg: "E-mail ou Senha estão incorretos"})
                    }
                    
                })
            } else {
                res.send("problema ocorreu ao logar usuário")
            }
        })
    }

    async list(req, res){
        const email = req.body.email;
        const password = req.body.password;
        db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
            if (err){
                res.send(err);
            }
            res.json(result)
        })
    }


}

export default new LoginController;

//Essa classe que criamos serve para ser importada no arquivo routes, que gera as rotas do nosso site, por aqui conseguimos controlar cada rota de forma intima, usando o comportamento assincrono index()...