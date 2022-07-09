import styled from "styled-components"

export const Login = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 2em;
`

export const Form = styled.form`
    background-color: #f1f1f1;
    width: 100%;
    max-width: 480px;
    padding: 0.5rem;

    label {
        padding: 0.5rem;
    }

    .field {
        padding-bottom: 0.5rem
    }

    .field label {
        display: block;
    }

    .field input {
        width: 100%
    }

    .actions {
        text-align: center;
        margin-top: 0.5rem;
    }
`
