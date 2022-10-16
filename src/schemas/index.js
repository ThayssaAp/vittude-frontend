import * as Yup from "yup";

export const schema = Yup.object().shape({
    email: Yup.string().email("Por favor, digite um email válido").required("Este campo é obrigatório"),
    password: Yup.string().min(5, "Sua senha deve ter no mínimo 5 caracteres").required("Este campo é obrigatório"),
})