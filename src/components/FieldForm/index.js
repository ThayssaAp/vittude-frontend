import "./FieldForm.css"
import { Field, useField } from "formik";

const FieldForm = (props) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className="campo-form">
                <label htmlFor={props.name}>{props.label}</label>
                <Field 
                id={props.name} 
                name={props.name} 
                type={props.name} 
                autoComplete={props.autoComplete} 
                placeholder={props.placeholder} />
            </div>
            {meta.touched && meta.error && ( <p className="validation-error">{meta.error}</p>)}
        </>
    )
}

export default FieldForm;