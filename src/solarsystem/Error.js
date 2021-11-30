import './Error.scss'

function Error(props){
    return (
        <div className="Error">
            <p>
                {props.message}
            </p>
        </div>
    )
}

export default Error