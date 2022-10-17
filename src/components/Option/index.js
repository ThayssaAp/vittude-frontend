import "./Option.css"

const Option = (props) => {
    return (
        <button className="options-login" disabled={props.disabled} type="button">
            <img src={props.src} alt={props.option} />
            <p>{props.option}</p>
        </button>
    )
}

export default Option;