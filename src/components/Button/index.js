import "./Button.css";

const Button = (props) => {
    return (
        <button className="btn" type={props.type}>{props.nameButton}</button>
    )
}

export default Button;