import "../styles/social.css";

const Social = ({info}) => {
  return (
    <div className="display-follow-me">
        <h3>Social</h3>
        <ul className="social-media-display-layout">
           {
            info.map(social =>  
            <li key={social.id}>
                <span className="socail-media-name-display-1">{social.type}</span> : <a href={social.accLink} className="acc-link-display-1">{social.accLink}</a>
            </li>)
           }
        </ul>
    </div>
  )
}

const SocialInput = ({info, handler, action}) => {
    return (
    <>
    <div>
        <h3>Social</h3>
        <div className="input-section-social-media">
            {
                info.map(social => 
                <div className="input-section-intro" key={social.id}>
                    <div className="input-group">
                        <input type="text" name="name" id="social-media-name-input-1" className="custom-input" placeholder="Social Media Name" onChange={(e) => handler(social.id, "type", e.target.value)}/>
                        <label htmlFor="social-media-name-input-1" className="custom-input-label">Social Media Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" id="acc-link-input-1"  className="custom-input" placeholder="Acc-link" onChange={(e) => handler(social.id, "accLink", e.target.value)}/>
                        <label htmlFor="acc-link" className="custom-input-label">Acc-link</label>
                    </div>
                </div> )
            }
            </div>
            <div className="plus-minus">
                <div className="add-row-btn" id="add-education-row-btn" onClick={(e) => action(e.target.innerText)}>
                    +
                </div> 
                <div className="remove-row-btn" id="remove-education-row-btn" onClick={(e) => action(e.target.innerText)}>
                    -
                </div> 
            </div>
        </div>
    </>
    )
}

export default Social;
export {SocialInput};