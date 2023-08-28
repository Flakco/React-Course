import ListData from "./ListData"

const List = ({data}) => {

  return (
        <ul className="dataUl">
            {data.map(dat => (
                <ListData key={dat.id} dat={dat}/>
            ))}
        </ul>

  )
}

export default List