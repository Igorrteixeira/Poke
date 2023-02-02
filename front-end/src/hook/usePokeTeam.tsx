import axios from 'axios'
import  { useState } from 'react'
import { URL_TEAM } from '../constants/URL_TEAM'

interface Team {
    id:string,
    poke_id:string
    team_id:string
}

const usePokeTeam = () => {
    const [pokeTeam,setPokeTeam] = useState<Team[]>([])

    const getPokeTeam = () => {
        axios
        .get(`${URL_TEAM}poke-team`)
        .then(res => setPokeTeam(res.data.resposne))
        .catch(error => alert(error.message))
    }

    const createPokeTeam = (teamId:string,pokeId:string) => {
        const body = {
            team_id:teamId,
            poke_id:pokeId, 
        }
        console.log(body)
        axios
        .post(`${URL_TEAM}poke-team/create`,body)
        .then(res => alert(res.data.response)) 
        .catch(error => alert(error.response.data.message))
    }
    
    const deletePokeTeam = (id:string) => {
        if(confirm('Deseja realmente deletar ?')){
        axios
        .delete(`${URL_TEAM}poke-team/delete/${id}`)
        .then(res => {
            alert(res.data.response)
            getPokeTeam()
        })
        .catch(error => alert(error.response.data.message))
    }
    }
    return {getPokeTeam,pokeTeam,createPokeTeam,deletePokeTeam}
}

export default usePokeTeam