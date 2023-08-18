import { useState } from "react"
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
    // const [name, setName] = useState("Wolf");
    // const [count, setCount] = useState(0);


    // const handleNameChange = () => {
    //     const names = ["Wolf","July","Parry"]
    //     const int = Math.floor(Math.random() * 3)
    //     setName(names[int])
    // }
    // const handleClick = () => {
    //   setCount(count + 1)
    // }
    // const handleClick2 = (name) => {
    //   console.log(`${name} clicked the button`)
    // }

    

  return (
        <>
        {/* <p>
            Hello {name}!{count}
        </p>
        <button onClick={handleNameChange}>Change name</button>
        <button onClick={handleClick}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => handleClick2(handleNameChange())}>Click!</button> */}
        {items.length ? (
          <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/> 
        ) : (<p style={{ marginTop: "2rem" }}>Your list is empty.</p>)}
        </> 
  )
}

export default Content