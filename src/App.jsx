import { useState } from 'react';
import './App.css';
import DisplayPersonalInfo from './components/DisplayPersonalInfo';
import Header from './components/Header';
import InputPersonalInfo from './components/InputPersonalInfo';
import DisplayInvestment from './components/DisplayInvestment';
import InputInvestment from './components/InputInvestment';
import { v4 as uuidv4 } from 'uuid';


function App() {

  let [info, setInfo] = useState({
    name : "Aragorn The Great",
    position : "Full Stack Developer",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    email : "jackfrost123@gmail.com",
    phone : "0987654321",
    address : "35th, 60th & 61th"
  });

  let [edu, setEdu] = useState([
    {
      start : "2010-06-01",
      end : "2012-01-31",
      where : "Lorem ipsum dolor sit amet",
      id : uuidv4()
    }
  ])

  let [experience, setExperience] = useState([
    {
      start : "2010-06-01",
      end : "2012-01-31",
      where : "Lorem ipsum dolor sit amet",
      id : uuidv4()
    }
  ])

  // personal info input handler
  function infoHandler (property, value) {
    setInfo((prevInfo) => ({...prevInfo, [property] : value}))
  }

  // edu input handler
  function eduHandler(id, property, value) {
    let newEdu = [];
    edu.map(place => {
      if(place.id === id) {
        newEdu.push({ ...place, [property] : value});
        return;
      }
      newEdu.push(place);
    });
    setEdu(newEdu);
  }

  // edu add new row
  function eduAction(value) {
    if(value === "+") {
      setEdu([...edu, {
        start : "0000-00-00",
        end : "0000-00-00",
        where : "Lorem ipsum dolor sit amet",
        id : uuidv4()
      }]);
    }
    if(value === "-") {
      let newEdu = edu.pop();
      setEdu(newEdu);
    }
  }

  // experience input handler
  function experienceHandler(id, property, value) {
    let newExperience = [];
    experience.map(place => {
      if(place.id === id) {
        newExperience.push({ ...place, [property] : value});
        return;
      }
      newExperience.push(place);
    });
    setExperience(newExperience);
  }

   // experience add new row
   function experienceAction(value) {
    if(value === "+") {
      setExperience([...experience, {
        start : "0000-00-00",
        end : "0000-00-00",
        where : "Lorem ipsum dolor sit amet",
        id : uuidv4()
      }]);
    }
    if(value === "-") {
      let newExperience = experience.pop();
      setExperience(newExperience);
    }
  }

  return (
    <>
     <header>
      <Header/>
     </header>
     <main>
      <div className='display-section'>
        <DisplayPersonalInfo info={info}/>
        <div className='display-body'>
          <DisplayInvestment name="Education" placeList={edu} />
          <DisplayInvestment name="Experience" placeList={experience} />
        </div>
      </div>
      <div className="input-section">
        <InputPersonalInfo info={info} handler={infoHandler} />
        <InputInvestment name="Education" info={edu} handler={eduHandler} action={eduAction} />
        <InputInvestment name="Experience" info={experience} handler={experienceHandler} action={experienceAction} />
      </div>
     </main>
    </>
  )
}

export default App;
