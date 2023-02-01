import React, { useState } from 'react'
import useTeam from '../../hook/useTeam'



const Team = () => {
  const [team, setTeam]= useState<string>('')
  const {createTeam} = useTeam()

  const onchange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTeam(value)
  }

  const submit = (e:any) => {
    e.preventDefault()
      createTeam(team)
      setTeam('')   
  }

 console.log(team)
 
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
        value={team}
        />
        <button type='submit'>Criar</button>
      </form>

      

    </div>
  )
}

export default Team