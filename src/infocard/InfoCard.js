import './InfoCard.scss'

function InfoCard(props){

    let hideInfoCard = e => {
        if (e.target.classList.contains('InfoBg')){
            let infoCard = document.getElementsByClassName('InfoCard')[0]
            let infoBg = document.getElementsByClassName('InfoBg')[0]
            infoCard.classList.remove('floating')
            infoBg.classList.remove('visible')
            infoBg.classList.add('invisible')
        }        
    }

    return(
        <div className="InfoBg visible" onClick={hideInfoCard}>
            <div className="InfoCard floating">
                <h1>solarscale</h1>
                {/* <p>
                    Calculate Solar System sizes to a scale that you can set. 
                </p> */}
                <p>                
                    &#8226; Click on any object. <br />            
                    &#8226; Set a size for any of it's properties.<br />            
                    &#8226; The app will calculate everything else, to that scale.                
                </p>
            </div>
        </div>
    )
}

export default InfoCard