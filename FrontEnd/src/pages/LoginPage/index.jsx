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
            <h1 className="title">Login</h1>
            <Form onSubmit={getSubmitAction}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </Form>
        </Login>
    );
}

export default LoginPage;