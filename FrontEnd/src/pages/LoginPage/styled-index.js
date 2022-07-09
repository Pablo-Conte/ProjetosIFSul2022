import styled from "styled-components"

export const Login = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #0E7321;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const Form = styled.form`
    width: 100%;
    max-width: 30rem;
    min-height: 40vh;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    
    h1 {
        text-align: center;
    }

    label {
        padding: 0.5rem;
        font-size: 1.4375rem;
    }

    .field {
        padding-bottom: 1rem;
        margin-bottom: 10px;
        justify-content: center;
    }

    .field label {
        display: block;
        border: none
    }

    .field input {
        width: 100%;
        height: 30px;
        padding: 10px;
        border-radius: 5px;
        border-color: #999999;
        border-width: 1px;
        :focus {
            border-width: 2px
            border-color: #111111
        }   
    }

    .actions {
        text-align: center;
        margin: 1rem;

        button{
            background-color: #ffffff;
            border-radius: 5px;
            width: 100px;
            height: 25px;
            border-width: 1px;
            :hover {
                border-width: 2px;
            }
        }
    }
`
