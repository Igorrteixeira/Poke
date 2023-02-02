import { useEffect, useState } from 'react'
import * as S from './Style'
import CardPokemon from '../../components/CardPokemons/CardPokemon'
import Header from '../../components/Header/Header'
import usePokemon from '../../hook/usePokemon'
import SelectTeam from '../../components/SelectTeam/SelectTeam'
import useTeam from '../../hook/useTeam'
import { goToTeam } from '../../routes/coordinator'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import usePokeTeam from '../../hook/usePokeTeam'


const Home = () => {
    const [teamId,setTeamId] = useState<string>('')
    const navigate:NavigateFunction = useNavigate()
    const {getPokes,pokemons} = 
    usePokemon()
    const {createPokeTeam,deletePokeTeam} = usePokeTeam()
    useEffect(()=>getPokes(),[])

    const {getTeam,team} = useTeam()
    useEffect(()=>getTeam(),[])

  return (
    <S.Container>
      <Header/>

      <SelectTeam 
      team={team} 
      setTeamId={setTeamId}
      button={()=>goToTeam(navigate)} />

      <S.ContCards>
        {pokemons.map((item,index) => 
        <CardPokemon 
        key={index} 
        name={item.name}
        add={()=>createPokeTeam(teamId,item.name)}
        />)}
      </S.ContCards>
        
    </S.Container>
  )
}

export default Home