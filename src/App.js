import { useState, useEffect } from "react"
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Square from "./Square";
import Input from "./Input";

function App() {
  const API_URL = "http://localhost:3500/items"
  const [colorValue, setColorValue] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [isDarkText, setIsDarkText] =  useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // if localstorage is empty it wont brake
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)

      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
    
  }, [])

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem("shoppinglist", JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id=items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem={id, checked:false, item}
    const listItems=[...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    // addItem
    addItem(newItem)
    setNewItem("")
    }
  return (
    <div className="App">
      <Header className="App-header" title="Groceries List"/>
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText}/>
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;

