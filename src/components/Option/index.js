import "./Option.css"

const Option = (props) => {
    return (
        <button className="optionsLogin" disabled={props.disabled} type="button">
            <img src={props.src} alt={props.option}></img>
            <p>{props.option}</p>
        </button>
    )
}

export default Option;