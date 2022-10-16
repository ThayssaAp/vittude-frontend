import FieldForm from "../FieldForm";
import Button from "../Button"
import "./Login.css"
import Option from "../Option";
// import { useState } from "react";
// import Login from "../../services/axios"
import { Formik, Form } from "formik";
import { schema } from "../../schemas";
import Login from "../../services/axios"

const onSubmit = async (values) => {
    const response = await Login(values.email, values.password)
    console.log(response)
}

const Forms = () => {
    return (
        <div className="login">
            <h2>Faça seu login</h2>
            <div className="login-form">
                <div className="optionLogin">
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
                            <Button onClick={onSubmit} type="submit" nameButton="Entrar" />
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="noCad">
                <p>Não é cadastrado?</p>
                <a>Crie uma conta</a>
            </div>
        </div>
    )
};

export default Forms;