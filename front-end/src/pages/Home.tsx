import React, { useEffect } from 'react'
import CardPokemon from '../components/CardPokemons/CardPokemon'
import usePokemon from '../hook/usePokemon'
import useRequestData from '../hook/useRequest'

const Home = () => {
    const {getPokes,pokemons,getPokeById,pokeDetails} = usePokemon()
    useEffect(()=>getPokes(),[])
    
    
  return (
    <div>
      
        {pokemons.map(item =>{    
            return <CardPokemon name={item.name}/>
        })}
        
    </div>
  )
}

export default Home