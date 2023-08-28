import { useState, useEffect } from 'react'
import Form from './Form'
import Table from './Table'

const FetchData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [ reqType, setReqType] = useState("users")
  const [ data, setData ] = useState([])

  useEffect(() => {

    const fetchitems = async () => {
        try{
            const response = await fetch(`${API_URL}${reqType}`)
            const info = await response.json()
            setData(info)
        } catch (err) {
            console.log(err)
        }
    }

    fetchitems()

  }, [reqType]) // run everytime req changes

  return (
    <>
        <Form reqType={reqType} setReqType={setReqType} />
        <Table data={data}/>
    </>
  )
}

export default FetchData