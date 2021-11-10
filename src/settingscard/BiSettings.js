import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './BiSettings.scss'

function BiSettings(props){

    const [selectedButton, setSelectedButton] = useState('btn1')
    const dispatch = useDispatch()

    let selectButton = e => {
        let button_name = e.target.dataset.buttonName
        setSelectedButton(button_name)
        let opt_num;

        if (button_name === 'btn1'){
            opt_num = 0
        }else if (button_name === 'btn2'){
            opt_num = 1
        }

        dispatch(props.options[opt_num].action(props.options[opt_num].payload))
    }

    return (
        <div className="BiSettings">
            <div className="title">{props.title}</div>
            <div className="buttons">
                <button 
                    className={selectedButton === 'btn1' ? 'selected' : ''} 
                    data-button-name="btn1"
                    onClick={selectButton}
                >
                    {props.options[0].label}
                </button>
                <button 
                    className={selectedButton === 'btn2' ? 'selected' : ''} 
                    data-button-name="btn2"
                    onClick={selectButton}
                >
                    {props.options[1].label}
                </button>
            </div>            
        </div>
    )
}

export default BiSettings