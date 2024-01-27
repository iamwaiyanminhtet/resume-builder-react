import { useState } from 'react';
import './App.css';
import Pfp from "./assets/test.jpg";
import DisplayPersonalInfo from './components/DisplayPersonalInfo';
import Header from './components/Header';
import InputPersonalInfo from './components/InputPersonalInfo';
import DisplayInvestment from './components/DisplayInvestment';
import InputInvestment from './components/InputInvestment';
import { v4 as uuidv4 } from 'uuid';
import Social, { SocialInput } from './components/Social';


function App() {

  let [info, setInfo] = useState({
    imageFile : null,
    image: Pfp,
    name: "Jack Frost",
    position: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    email: "jackfrost123@gmail.com",
    phone: "0987654321",
    address: "35th, 60th & 61th"
  });

  let [edu, setEdu] = useState([
    {
      start: "2010-06-01",
      end: "2012-01-31",
      where: "Lorem ipsum dolor sit amet",
      id: uuidv4()
    }
  ])

  let [experience, setExperience] = useState([
    {
      start: "2010-06-01",
      end: "2012-01-31",
      where: "Lorem ipsum dolor sit amet",
      id: uuidv4()
    }
  ])

  let [social, setSocial] = useState([
    {
      type: "Facebook",
      accLink: "https://www.facebook.com/example",
      id: uuidv4()
    }
  ]);

  // personal info input handler
  function infoHandler(property, value) {
    setInfo((prevInfo) => ({ ...prevInfo, [property]: value }))
  }

  // image preview
  function imagePreview(e) {
    let input = e.target;
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (load) {
        setInfo({...info, imageFile : load.target.result})
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  // edu input handler
  function eduHandler(id, property, value) {
    let newEdu = [];
    edu.map(place => {
      if (place.id === id) {
        newEdu.push({ ...place, [property]: value });
        return;
      }
      newEdu.push(place);
    });
    setEdu(newEdu);
  }

  // edu add new row
  function eduAction(value) {
    if (value === "+") {
      setEdu([...edu, {
        start: "0000-00-00",
        end: "0000-00-00",
        where: "Lorem ipsum dolor sit amet",
        id: uuidv4()
      }]);
    }
    if (value === "-") {
      if (edu.length > 1) {
        edu.pop();
        setEdu([...edu]);
      }
    }
  }

  // experience input handler
  function experienceHandler(id, property, value) {
    let newExperience = [];
    experience.map(place => {
      if (place.id === id) {
        newExperience.push({ ...place, [property]: value });
        return;
      }
      newExperience.push(place);
    });
    setExperience(newExperience);
  }

  // experience add new row
  function experienceAction(value) {
    if (value === "+") {
      setExperience([...experience, {
        start: "0000-00-00",
        end: "0000-00-00",
        where: "Lorem ipsum dolor sit amet",
        id: uuidv4()
      }]);
    }
    if (value === "-") {
      if (experience.length > 1) {
        experience.pop();
        setExperience([...experience]);
      }
    }
  }

  function socialHandler(id, property, value) {
    let newSocial = [];
    social.map(social => {
      if (social.id === id) {
        newSocial.push({ ...social, [property]: value });
        return;
      }
      newSocial.push(social);
    });
    setSocial(newSocial);
  }

  function socialAction(value) {
    if (value === "+") {
      setSocial([...social, {
        type: "Facebook",
        accLink: "https://www.facebook.com/example",
        id: uuidv4()
      }]);
    }
    if (value === "-") {
      if (social.length > 1) {
        social.pop();
        setSocial([...social]);
      }
    }
  }


  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='display-section'>
          <DisplayPersonalInfo info={info} />
          <hr/>
          <div className='display-body'>
            <DisplayInvestment name="Education" placeList={edu} />
            <DisplayInvestment name="Experience" placeList={experience} />
          </div>
          <hr/>
          <Social info={social} />
        </div>
        <div className="input-section">
          <InputPersonalInfo info={info} handler={infoHandler} imagePreview={imagePreview} />
          <hr/>
          <InputInvestment name="Education" info={edu} handler={eduHandler} action={eduAction} />
          <hr/>
          <InputInvestment name="Experience" info={experience} handler={experienceHandler} action={experienceAction} />
          <hr/>
          <SocialInput info={social} handler={socialHandler} action={socialAction} />
          <hr/>
          <div id="resume-div">
              <button id="print-resume" type="button" onClick={() => window.print()}>Print Resume</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
