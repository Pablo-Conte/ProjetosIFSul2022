import dataBase from "../database/index.mjs"
import bcrypt from "bcrypt"
const saltRounds = 10

const db = dataBase.connection

class RegisterController {
    async index(req, res){
        res.json({hello: "world"})
    }

    async create (req, res){
        const email = req.body.email;
        const password = req.body.password;
        db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
            if(err){
                res.send(err)
            }
            if(result.length == 0){
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, result) => {
                        if (err){
                            console.log(err)
                        } else {
                            res.send({msg: "Usuario criado com sucesso"})
                            
                        }
                        
                    });
                })
                
            } else {
                res.send({msg: "Este usuario já está cadastrado!"})
            }
        })
    }
}

export default new RegisterController;