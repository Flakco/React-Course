import colorNames from "colornames"

const Input = ({colorValue,setColorValue,setHexValue ,isDarkText, setIsDarkText}) => {
  return (
    <form type="form" onSubmit={(e) => e.preventDefault()}>
        <label className="color">Add Color Name:</label>
        <input className="color2" autoFocus type="text2" placeholder="Add Color Name" required value={colorValue} onChange={(e) => {setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))}}/>
        <button className="button-color" type="button" onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
    </form>

  )
}

export default Input