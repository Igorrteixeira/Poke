import React, { useState } from 'react'
import axios from 'axios'
import { URL_POKE } from '../constants/URL_POKE'

const usePokemon = () => {
    const [pokemons,setPokemons] = useState([{name:''}])
    const [pokeDetails,setPokeDetails] = useState({
        order:'',
        img:'',
        type:'',
    })
    

    const getPokes = () => {
        axios
        .get(`${URL_POKE}`)
        .then((res)=>setPokemons(res.data.results))
        .catch(error => console.log(error))
    }
    
    const getPokeById = (name:string) => {
        axios
        .get(`${URL_POKE}${name}`)
        .then((res)=>{
            setPokeDetails({
                img:res.data.sprites.other.dream_world.front_default,
                order:res.data.order,
                type:res.data.types[0].type.name
            })
        })
        .catch(error => console.log(error))
    }


    return {getPokeById,getPokes,pokemons,pokeDetails}

}

export default usePokemon