import './InfoCard.scss'

function InfoCard(props){
    return(
        <div className="InfoCard">
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
    )
}

export default InfoCard