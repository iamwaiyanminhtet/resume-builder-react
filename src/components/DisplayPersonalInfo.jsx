import "../styles/display.css";
import Pfp from "../assets/test.jpg"
import Icon from "./helperComponents/Icon";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'



const DisplayPersonalInfo = ({ info }) => {
  return (
    <>
      <div className="display-section-header">
        <div className="display-section-img">
          <img src={Pfp} alt="image" />
        </div>
        <div className="display-section-intro">
          <span id="position-display">{info.position}</span>
          <h2 id="name-display">{info.name}</h2>
          <p id="about-me-display">{info.description}</p>
        </div>
      </div>
      <div className="display-section-info">
        <div>
          <div className="contact-info">
            <div className="contact-info-icon">
              <Icon iconName={faEnvelope} />
            </div> :
            <span className="email-display">{info.email}</span>
          </div>

          <div className="contact-info">
            <div className="contact-info-icon">
            <Icon iconName={faPhone} />
            </div> :
            <span className="phone-number-display"> {info.phone}</span>
          </div>

          <div className="contact-info">
            <div className="contact-info-icon">
              <Icon iconName={faLocationDot} />
            </div> :
            <span className="address-display">{info.address}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayPersonalInfo;