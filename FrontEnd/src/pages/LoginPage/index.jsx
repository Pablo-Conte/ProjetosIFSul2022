import React, { useState } from "react";
import { Login, Form } from "./styled-index";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const getSubmitAction = (e) => {
        e.preventDefault()
        
        console.log("submit", {email, password});
        
    }
    
    return (
        <Login>
            
            <Form onSubmit={getSubmitAction}>
                <h1 className="title">LOGIN</h1>
                <div className="field">
                    <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="field">
                    <input type="password" name="password" id="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
                
            </Form>
        </Login>
    );
}

export default LoginPage;