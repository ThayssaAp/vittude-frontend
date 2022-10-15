import InputForm from "../InputForm";
import Button from "../Button"
import "./Login.css"
import Option from "../Option";
import { useState } from "react";
import Login from "../../services/axios"

const Forms = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const handleClick = async () => {
        const response = await Login(email, password) 
        console.log(response)
    }

    return (
        <div className="login">
            <h2>Faça seu login</h2>
            <form>
                <div className="optionLogin">
                    <Option src="img/psico.svg" option="Psicológo" disabled={true}/>
                    <Option src="img/paciente.svg" option="Paciente" disabled={false}/>
                </div>
                <InputForm onChange={event => {setEmail(event.target.value)}} name="Email*" type="email" autoComplete="email" placeholder="Digite seu email" />
                <InputForm onChange={event => {setPassword(event.target.value)}} name="Senha*" type="password" autoComplete="new-password" placeholder="Digite sua senha" />
                <a>esqueci minha senha!</a>
                <Button onClick={handleClick} type="button" nameButton="Entrar" />
            </form>
            <div className="noCad">
                <p>Não é cadastrado?</p>
                <a>Crie uma conta</a>
            </div>
        </div>
    )
};

export default Forms;