import "../styles/input.css"
import TextInput from "./helperComponents/TextInput";

const InputPersonalInfo = ({info, handler}) => {
  return (
    <div>
        <h3>Your Info</h3>
        <div className="input-section-intro">
            <div className="input-group">
                <TextInput type="text" placeholder="Your Name" handler={handler} changeEle="name"/>
                <label htmlFor="name" className="custom-input-label">Your Name</label>
            </div>
            <div className="input-group">
                <TextInput type="text" placeholder="Your Position" handler={handler} changeEle="position"/>
                <label htmlFor="name" className="custom-input-label">Your Position</label>
            </div>
        </div>
        <div className="input-section-about">
            <textarea className="custom-input" name="" cols="20" rows="2" placeholder="describe a few words about you" id="about-me-input" onChange={(e) => handler("description", e.target.value)}></textarea>
        </div>
        <div className="input-section-intro">
            <div className="input-group">
                <TextInput type="email" placeholder="Email..." handler={handler} changeEle="email"/>
                <label htmlFor="email" className="custom-input-label">Email</label>
            </div>
            <div className="input-group">
                <TextInput type="number" placeholder="Phone..." handler={handler} changeEle="phone"/>
                <label htmlFor="phone" className="custom-input-label">Phone</label>
            </div>
            <div className="input-group">
                <TextInput type="text" placeholder="Address" handler={handler} changeEle="address"/>
                <label htmlFor="address" className="custom-input-label">Address</label>
            </div>
        </div>
        <div className="input-section-image">
            <label htmlFor="image-input" id="label-image">Image Upload</label>
            <input type="file" accept="image/*" id="image-input" />
        </div>
    </div>
  )
}

export default InputPersonalInfo;