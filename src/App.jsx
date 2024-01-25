import { useState } from 'react';
import './App.css';
import DisplayPersonalInfo from './components/DisplayPersonalInfo';
import Header from './components/Header';
import InputPersonalInfo from './components/InputPersonalInfo';


function App() {

  let [info, setInfo] = useState({
    name : "Aragorn The Great",
    position : "Full Stack Developer",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    email : "jackfrost123@gmail.com",
    phone : "0987654321",
    address : "35th, 60th & 61th"
  });

  function handler (property, value) {
    setInfo((prevInfo) => ({...prevInfo, [property] : value}))
  }

  return (
    <>
     <header>
      <Header/>
     </header>
     <main>
      <div className='display-section'>
        <DisplayPersonalInfo info={info}/>
      </div>
      <div className="input-section">
        <InputPersonalInfo info={info} handler={handler} />
      </div>
     </main>
    </>
  )
}

export default App;
