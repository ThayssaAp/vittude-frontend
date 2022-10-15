import "./Button.css";

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick} type={props.type}>{props.nameButton}</button>
    )
}

export default Button;