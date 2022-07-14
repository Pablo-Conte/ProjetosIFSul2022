import axios from "axios";
import React, { useState } from "react";
import { Login, Form } from "./styled-login";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const LoginPage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [msg, setMsg] = useState("") 

    function MyVerticallyCenteredModal(props, data) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                
                <Modal.Body>
                    <h4>Alerta!</h4>
                    <p>
                        {msg}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const getSubmitAction = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        }).then((response) => {
            console.log(response)
            setModalShow(true)
            setMsg(response.data.msg)
        })

    }



    return (
        <Login>
            <Form onSubmit={getSubmitAction}>
                <h1 className="title">LOGIN</h1>
                <div className="field">
                    <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                    <input type="password" name="password" id="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <p>Não é cadastrado ainda? <a href="/register">Registre-se aqui!</a></p>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>


                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </Form>
        </Login>


    );
}

export default LoginPage;