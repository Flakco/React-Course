import { useState } from "react"
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked:false,
      item: "Choocolate"
    },
    {
      id: 2,
      checked:false,
      item: "Rice"
    },
    {
      id: 3,
      checked:false,
      item: "Coffe"
    },
  ])

  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header className="App-header" title="Groceries List"/>
      <AddItem/>
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
