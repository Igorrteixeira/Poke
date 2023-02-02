import React, { useEffect, useState } from 'react'
import CardTeam from '../../components/CardTeam/CardTeam'
import usePokeTeam from '../../hook/usePokeTeam'
import useTeam from '../../hook/useTeam'



const Team = () => {
  const [newTeam, setNewTeam]= useState<string>('')
  const [teamId, setTeamId]= useState<string>('')

  const {createTeam,getTeam,team} = useTeam()
  useEffect(()=>getTeam,[])

  const {getPokeTeam,pokeTeam,deletePokeTeam} = usePokeTeam()
  useEffect(()=>getPokeTeam(),[])

console.log(teamId)

  const onchange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewTeam(value)
  }

  const submit = (e:any) => {
    e.preventDefault()
      createTeam(newTeam)
      setNewTeam('')   
  }
 
  return (
    <div>
      <form onSubmit={submit}>
        <h3>Criar Time</h3>
        <label htmlFor="team">Nome do time</label>
        <input 
        id='team'
        type="text"
        name='team'
        onChange={onchange}
        value={newTeam}
        />
        <button type='submit'>Criar</button>
      </form>

      <label htmlFor="team">Selecione um time</label>
        <select 
        onChange={(e)=>setTeamId(e.target.value)}
        id="team">
        {team.map(item=> 
        <option key={item.id} value={item.id}>{item.name}</option> )}
        </select>

        {pokeTeam.map(item=>{
            if(item.team_id === teamId){
              return <CardTeam 
              pokeId={item.poke_id} 
              delete={()=>deletePokeTeam(item.id)}/>
            }
        })}
    
    </div>
  )
}

export default Team