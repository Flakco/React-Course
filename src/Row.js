import Cell from "./Cell"

const Row = ({dat}) => {
  return (
    <tr>
        {Object.entries(dat).map(([key, value]) => {
          return (
            <Cell key={key} cellData={JSON.stringify(value)}/>
          )
        })}
    </tr>
  )
}

export default Row