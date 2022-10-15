import "./InputForm.css"

const InputForm = (props) => {
    return (
        <div className="campo-form">
            <label for={props.name}>{props.name}</label>
            <input onChange={props.onChange} name={props.name} type={props.type} autoComplete={props.autoComplete} placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputForm;