import React, { useEffect, useState } from 'react'
import CardTeam from '../../components/CardTeam/CardTeam'
import usePokeTeam from '../../hook/usePokeTeam'
import useTeam from '../../hook/useTeam'



const Team = () => {
  const [newTeam, setNewTeam]= useState<string>('')
  const {createTeam} = useTeam()
  const {getPokeTeam,pokeTeam} = usePokeTeam()
  useEffect(()=>getPokeTeam(),[])

  console.log(pokeTeam)


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

      <CardTeam/>

    </div>
  )
}

export default Team