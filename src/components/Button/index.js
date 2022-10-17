import "./Button.css";

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick} type={props.type}>{props.name}</button>
    )
};

export default Button;