import Row from "./Row"

const Table = ({data}) => {

  return (
        <div className="table-container">
          <table>
            <tbody>
              {data.map(dat => (
                  <Row key={dat.id} dat={dat}/>
              ))}
            </tbody>
          </table>
            
        </div>

  )
}

export default Table