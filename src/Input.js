import colorNames from "colornames"

const Input = ({colorValue,setColorValue,setHexValue}) => {
  return (
    <form type="form" onSubmit={(e) => e.preventDefault()}>
        <label className="color">Add Color Name:</label>
        <input id="colort" autoFocus type="text2" placeholder="Add Color Name" required value={colorValue} onChange={(e) => {setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))}}/>
    </form>
  )
}

export default Input