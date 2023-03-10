import axios from 'axios'
import  { useState } from 'react'
import { URL_TEAM } from '../constants/URL_TEAM'
import usePokeTeam from './usePokeTeam'

interface Team {
    id:string,
    name:string
}

const useTeam = () => {
    const [team,setTeam] = useState<Team[]>([])
    const {getPokeTeam} = usePokeTeam()

    const getTeam = () => {
        axios
        .get(`${URL_TEAM}team`)
        .then(res => setTeam(res.data.resposne))
        .catch(error => alert(error.response.data.message || error.message ))
    }

    const createTeam = (name:string) => {
        const body = {name,}  
        axios
        .post(`${URL_TEAM}team/create`,body)
        .then(res => alert(res.data.response)) 
        .catch(error => alert(error.response.data.message || error.message ))
    }

    const deleteTeam = (id:string) => {
        axios
        .delete(`${URL_TEAM}team/delete/${id}`,)
        .then(res => {
            alert(res.data.response)
            getTeam()
            getPokeTeam()
        }) 
        .catch(error => alert(error.response.data.message || error.message ))
    }

    return {getTeam,team,createTeam,deleteTeam}
}

export default useTeam