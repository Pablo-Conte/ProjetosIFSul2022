import dataBase from "../database/index.mjs"

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
                db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, password], (err, result) => {
                    if (err){
                        console.log(err)
                    } else {
                        res.send({msg: "Cadastrado com sucesso!"})
                        
                    }
                    
                });
            } else {
                res.send({msg: "Este usuario já está cadastrado!"})
            }
        })
    }
}

export default new RegisterController;