import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {MdAddCircle} from 'react-icons/md'
import CardTeam from '../../components/CardTeam/CardTeam'
import Header from '../../components/Header/Header'
import usePokeTeam from '../../hook/usePokeTeam'
import useTeam from '../../hook/useTeam'
import { goToHome } from '../../routes/coordinator'
import * as S from './Style'

const Team = () => {
  const [newTeam, setNewTeam]= useState<string>('')
  const [teamId, setTeamId]= useState<string>('')

  const navigate = useNavigate()

  const {createTeam,getTeam,team} = useTeam()
  useEffect(()=>getTeam,[])

  const {getPokeTeam,pokeTeam,deletePokeTeam} = usePokeTeam()
  useEffect(()=>getPokeTeam(),[])


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
    <S.Container>
      <Header/>
      <S.ContForm>
      <S.Button onClick={()=>goToHome(navigate)}>
        Voltar
        <BsFillArrowLeftCircleFill/>
      </S.Button>
      <S.ContSelect>
        <label htmlFor="team">Selecione um time para ver</label>
            <select
            onChange={(e)=>setTeamId(e.target.value)}
            id="team">
            {team.map(item=>
            <option key={item.id} value={item.id}>{item.name}</option> )}
            </select>
      </S.ContSelect>
            
        <form onSubmit={submit}>
          <label htmlFor="team">Criar novo time</label>
          <input
          id='team'
          type="text"
          name='team'
          placeholder='Digite nome do time...'
          onChange={onchange}
          value={newTeam}
          />
          <S.Button type='submit'>Criar <MdAddCircle/></S.Button>
        </form>
        
      </S.ContForm>

        {pokeTeam.map(item=>{
            if(item.team_id === teamId){
              return <CardTeam 
              pokeId={item.poke_id} 
              delete={()=>deletePokeTeam(item.id)}/>
            }
        })}
    
    </S.Container>
  )
}

export default Team