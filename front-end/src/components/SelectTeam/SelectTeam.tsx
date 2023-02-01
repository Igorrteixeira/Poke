

interface Team {
    id:string,
    name:string
}

interface Props {
    team:Team[],
    button:()=>void
}

const SelectTeam = (props:Props) => {
  return (
    <div>
        <label htmlFor="team">Selecione um time</label>
        <select 
        name="" 
        id="team">
        {props.team.map(item=> 
        <option key={item.id} value="">{item.name}</option> )}
        </select>

        <button onClick={props.button}>Times</button>
    </div>
  )
}

export default SelectTeam