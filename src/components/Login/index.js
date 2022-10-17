import FieldForm from "../FieldForm";
import Button from "../Button";
import "./Login.css";
import Option from "../Option";
import { Formik, Form } from "formik";
import { schema } from "../../schemas";
import Login from "../../services/axios";

const onSubmit = async (form) => {
    if(!form.email || !form.password) return
    const response = await Login(form.email, form.password)
    window.alert(response)
    
};

const Forms = () => {
    return (
        <div className="login">
            <h2>Faça seu login</h2>
            <div className="login-form">
                <div className="option-login">
                    <Option src="img/psico.svg" option="Psicológo" disabled={true} />
                    <Option src="img/paciente.svg" option="Paciente" disabled={false} />
                </div>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={onSubmit}
                >
                    {() => (
                        <Form>
                            <FieldForm
                                label="Email*"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Digite seu email"
                            />
                            <FieldForm
                                label="Senha*"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Digite sua senha"
                            />
                            <a>esqueci minha senha!</a>
                            <Button onClick={onSubmit} type="submit" name="Entrar" />
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="criar-conta">
                <p>Não é cadastrado?</p>
                <a>Crie uma conta</a>
            </div>
        </div>
    );
};

export default Forms;