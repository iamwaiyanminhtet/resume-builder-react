import "../styles/header.css";

const Header = () => {
  return (
    <nav>
        <ul>
            <li>Resume Builder</li>
            <li>
               {/* 
               I could do like this for every states
               onClick={() => setInfo({...info, name : "Jack Frost"})}, 
               but I will just window.location.reload() :)
               */}
               <button type="button" id="exampleBtn" onClick={() => window.location.reload()}>Example</button>
            </li>
        </ul>
    </nav>
  )
}

export default Header