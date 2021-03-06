import React, { useState } from "react";
import { Register, Form } from "./styled-register.mjs";
import axios from "axios"


const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verificarPassword, setVerificarPassword] = useState("");
    
    const getSubmitAction = (e) => {
        e.preventDefault()
        if (password === verificarPassword) {
            axios.post("http://localhost:5000/register", {
                email: email,
                password: password
            }).then((response) => {
                alert(response.data.msg)
            })

        } else {
            alert("Senhas não são iguais, tente novamente.")
        }
        
        
    }
    
    return (
        <Register>
            
            <Form onSubmit={getSubmitAction}>
                <h1 className="title">CADASTRO</h1>
                <div className="field">
                    <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="field">
                    <input type="password" name="password" id="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <div className="field">
                    <input type="password" name="VerificaPassword" id="VerificaPassword" value={verificarPassword} placeholder="Confirmar Senha" onChange={(e) => setVerificarPassword(e.target.value)} required/>
                </div>

                <p>Voltar para a Página de <a href="/login">Login</a></p>

                <div className="actions">
                    <button type="submit">Cadastrar</button>
                </div>
            </Form>
        </Register>
    );
}

export default RegisterPage;