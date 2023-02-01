import React, { useEffect, useState } from 'react'
import * as S from './Style'
import CardPokemon from '../../components/CardPokemons/CardPokemon'
import Header from '../../components/Header/Header'
import usePokemon from '../../hook/usePokemon'
import SelectTeam from '../../components/SelectTeam/SelectTeam'
import useTeam from '../../hook/useTeam'
import { goToTeam } from '../../routes/coordinator'
import { NavigateFunction, useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate:NavigateFunction = useNavigate()
    const {getPokes,pokemons,getPokeById,pokeDetails} = usePokemon()
    useEffect(()=>getPokes(),[])

    const {getTeam,team,createTeam} = useTeam()
    useEffect(()=>getTeam(),[])

  return (
    <div>
      <Header/>
      <SelectTeam 
      team={team} 
      button={()=>goToTeam(navigate)} />
      <S.ContCards>
        {pokemons.map((item,index) => 
        <CardPokemon key={index} name={item.name}/>)}
      </S.ContCards>
        
    </div>
  )
}

export default Home