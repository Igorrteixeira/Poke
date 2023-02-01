import React, { useEffect } from 'react'
import * as S from './Style'
import CardPokemon from '../components/CardPokemons/CardPokemon'
import Header from '../components/Header/Header'
import usePokemon from '../hook/usePokemon'
import SelectTeam from '../components/SelectTeam/SelectTeam'
import useTeam from '../hook/useTeam'


const Home = () => {
    const {getPokes,pokemons,getPokeById,pokeDetails} = usePokemon()
    useEffect(()=>getPokes(),[])
    const {getTeam,team} = useTeam()
    useEffect(()=>getTeam('team'),[])
    console.log(team)
  return (
    <div>
      <Header/>
      <SelectTeam button={''} team={team}/>
      <S.ContCards>
        {pokemons.map(item => <CardPokemon name={item.name}/>)}
      </S.ContCards>
        
    </div>
  )
}

export default Home