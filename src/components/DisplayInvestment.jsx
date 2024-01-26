import "../styles/display.css";

const DisplayInvestment = ({name, placeList}) => {

  return (
    <div className="display-section-education">
        <h3>{name}</h3>
        <div className="education-info">
            <ul id="display-education-info">
              {
                placeList.map((pl) => 
                <>
                  <li key={pl.id}> 
                    <span>
                      <span id="education-from-display-1">{pl.start}</span> / <span id="education-to-display-1">{pl.end}</span>
                      </span>
                    <div>
                      <span id="education-where-display-1">{pl.where}</span>
                    </div>  
                  </li>
                </>)
              }
            </ul>
        </div>          
    </div>
  )
}

export default DisplayInvestment;