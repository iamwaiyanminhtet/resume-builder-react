const TextInput = ({type, placeholder, handler, changeEle}) => {
  

  return (
    <input type={type} className="custom-input name-input" placeholder={placeholder} onChange={(e) => {
        handler( changeEle , e.target.value)
    }}/>
  )
}

export default TextInput