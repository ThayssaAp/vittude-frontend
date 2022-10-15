import InputForm from "../InputForm";
import Button from "../Button"
import "./Login.css"
import Option from "../Option";

const Forms = () => {
    return (
        <div className="login">
            <h2>Faça seu login</h2>
            <form>
                <div className="optionLogin">
                    <Option src="img/psico.svg" option="Psicológo" disabled={true}/>
                    <Option src="img/paciente.svg" option="Paciente" disabled={false}/>
                </div>
                <InputForm name="Email*" type="email" autoComplete="email" placeholder="Digite seu email" />
                <InputForm name="Senha*" type="password" autoComplete="new-password" placeholder="Digite sua senha" />
                <a>esqueci minha senha!</a>
                <Button type="button" nameButton="Entrar" />
            </form>
            <div className="noCad">
                <p>Não é cadastrado?</p>
                <a>Crie uma conta</a>
            </div>
        </div>
    )
};

export default Forms;