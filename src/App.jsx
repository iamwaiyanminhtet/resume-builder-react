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
import Footer from './components/Footer';


function App() {

  // display personal info
  let [info, setInfo] = useState({
    imageFile : null,
    image: Pfp,
    name: "Aragorn",
    position: "King of Gondor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    email: "aragorn@gondor.com",
    phone: "0987654321",
    address: "35th, 60th & 61th"
  });

  // others section data
  let [general, setGeneral] = useState({
    edu : [
      {
        start: "2010-06-01",
        end: "2012-01-31",
        where: "Lorem ipsum dolor sit amet",
        id: uuidv4()
      }
    ],
    experience : [
      {
        start: "2010-06-01",
        end: "2012-01-31",
        where: "Lorem ipsum dolor sit amet",
        id: uuidv4()
      }
    ],
    social : [
      {
        type: "Facebook",
        accLink: "https://www.facebook.com/example",
        id: uuidv4()
      }
    ]
  });

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

  // others section state handlers
  function handler(id, property, value, dataArr, name) {
    let newArr = [];
    dataArr.map(place => {
      if (place.id === id) {
        newArr.push({ ...place, [property]: value });
        return;
      }
      newArr.push(place);
    });
    setGeneral({...general, [name] : newArr})
  }

  // action when inputs change
  function action(info , mainProps, symbol) {
    if (symbol === "+") {
      if(mainProps === "edu" || mainProps === "experience") {
        let newArr = [...info, {
          start: "0000-00-00",
          end: "0000-00-00",
          where: "Lorem ipsum dolor sit amet",
          id: uuidv4()
        }];
        setGeneral({...general, [mainProps] : newArr})
      }
      if(mainProps === "social") {
        let newArr = [...info, {
          type: "Facebook",
          accLink: "https://www.facebook.com/example",
          id: uuidv4()
        }];
        setGeneral({...general, [mainProps] : newArr})
      }
    }
    if (symbol === "-") {
      if (info.length > 1) {
        info.pop();
        setGeneral({...general, [mainProps] : info})
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
            <DisplayInvestment name="Education" placeList={general.edu} />
            <DisplayInvestment name="Experience" placeList={general.experience} />
          </div>
          <hr/>
          <Social info={general.social} />
        </div>
        <div className="input-section">
          <InputPersonalInfo info={info} handler={infoHandler} imagePreview={imagePreview} />
          <hr/>
          <InputInvestment name="Education" dataArrName="edu" info={general.edu} handler={handler} action={action} />
          <hr/>
          <InputInvestment name="Experience" dataArrName="experience" info={general.experience} handler={handler} action={action} />
          <hr/>
          <SocialInput info={general.social} handler={handler} action={action} dataArrName="social"/>
          <hr/>
          <div id="resume-div">
              <button id="print-resume" type="button" onClick={() => window.print()}>Print Resume</button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App;